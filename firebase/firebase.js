const firebaseConfig = {
    apiKey: "AIzaSyB0v6r5-QYPb521dYbwvbicSieiI-7SfZw",
    authDomain: "baabcrud2.firebaseapp.com",
    databaseURL: "https://baabcrud2-default-rtdb.firebaseio.com",
    projectId: "baabcrud2",
    storageBucket: "baabcrud2.appspot.com",
    messagingSenderId: "766906664317",
    appId: "1:766906664317:web:70cb090fccf5a0ab857814",
    measurementId: "G-W7SJKHQQDD"
  };

  firebase.initializeApp(firebaseConfig);

  const contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);
  }

  const saveMessages = (name, emailid, msgContent) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        Mobile : msgContent,
    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };