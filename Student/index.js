const express = require('express');
const path = require('path');
const mysql = require('mysql')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = 4500;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
  })
app.set('view engine','ejs');
app.set('views', __dirname+'/templates');
app.use(bodyParser.urlencoded({extended:true}));

router.get('/student_form',(req,res) => {
    const selquery = "select * from student_data";
    connection.query(selquery, (err, rows, fields) => {
        console.log("Rows:", rows)
        res.render('add_data', { rows });
    });

});

router.post('/submit_data',(req,res) => {
// res.send('data recieved');
var name = req.body.txt_name;
var cls = req.body.txt_class;
var stream = req.body.txt_stream;
var mark = req.body.txt_mark;
var grade = req.body.txt_grade;
// connection.connect();
strquery = "insert into student_data(name,class,mark,stream,grade) values('"+name+"','"+cls+"','"+mark+"', '"+stream+"','"+grade+"')";
connection.query(strquery, (err, rows, fields) => {
    // if (err) throw err
  
    // console.log('there is an error occured')
    res.redirect('/student_form');
  });
  
//   connection.end()
// res.send("Name: " + name + " " + "Class: "+ cls + " " + "Stream: "  + stream + " " +  "Mark: " + mark + " " + "Grade: " + grade);

});
router.get('/delete_student', (req,res) => {
    var id = req.query.id;
    delquery = "DELETE from student_data WHERE student_id="+id;
    connection.query(delquery, (err, rows, fields) => {
        res.redirect('/student_form');
    })
    
    // res.send("delete request got" +req.query.id);
});
router.get('/update_student', (req,res) => {
    const id = req.query.id;
    selquery = "SELECT * from student_data WHERE student_id="+id;
    connection.query(selquery, (err, rows, fields) => {
        res.render('update', { rows });
    })
});

router.post('/update_data',(req,res) => {
    // res.send('data recieved');
    var name = req.body.txt_name;
    var cls = req.body.txt_class;
    var stream = req.body.txt_stream;
    var mark = req.body.txt_mark;
    var grade = req.body.txt_grade;
    var id = req.body.id;
    // connection.connect();
    strquery = "  UPDATE student_data SET name='" + name +"', class='" + cls +"', mark='" + mark +"', stream='" + stream +"', grade='" + grade +"' WHERE student_id="+id;
    
    connection.query(strquery, (err, rows, fields) => {
        // if (err) throw err
      
        // console.log('there is an error occured')
        res.redirect('/student_form');
      });
      
    //   connection.end()
    // res.send("Name: " + name + " " + "Class: "+ cls + " " + "Stream: "  + stream + " " +  "Mark: " + mark + " " + "Grade: " + grade);
    
    });
// router.get('/', (req,res) => {
//     const id= req.query.id;
//     updquery = "UPDATE from student_data WHERE student_id="+id;
//     connection.query(updquery, (err, rows, fields) => {
//         res.redirect('/student_form');
//     })
// });
router.get('/', (req,res) => {
    var data = {title:'Student data',student_data:[{
        name: 'Arun',
        class: 'Plus one',
        stream: 'Science',
        mark: 90,
        grade: 'A plus'
    },
    {
        name: 'Ajay',
        class: 'Plus one',
        stream: 'Science',
        mark: 80,
        grade: 'A'
    },
    {
        name: 'Anjali',
        class: 'Plus one',
        stream: 'Science',
        mark: 80,
        grade: 'A'
    },
    {
        name: 'Nandhana',
        class: 'Plus one',
        stream: 'Science',
        mark: 70,
        grade: 'B plus'
    },
    {
        name: 'Nayana',
        class: 'Plus one',
        stream: 'Science',
        mark: 75,
        grade: 'B plus'
    },
    {
        name: 'Namith',
        class: 'Plus one',
        stream: 'Science',
        mark: 60,
        grade: 'B'
    },
    {
        name: 'Nikhil',
        class: 'Plus one',
        stream: 'Science',
        mark: 65,
        grade: 'B'
    },
    {
        name: 'Malu',
        class: 'Plus one',
        stream: 'Science',
        mark: 90,
        grade: 'A plus'
    },
    {
        name: 'Nivin',
        class: 'Plus one',
        stream: 'Science',
        mark: 70,
        grade: 'B plus'
    },
    {
        name: 'Fidha',
        class: 'Plus one',
        stream: 'Science',
        mark: 75,
        grade: 'B plus'
    }]};
    res.render('index',data);
});


app.use(express.static(__dirname+'/public'));
app.use('/',router);
app.listen(port,() => console.log('server is running'));