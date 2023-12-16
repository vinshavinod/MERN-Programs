const redux =require('redux');
const createStore = redux.legacy_createStore;
const initialState = {color:'red'};
const myReducer = (state=initialState,action) => {
    const newState = {...state};
    if(action.type== 'blue') {
        newState.color='blue';
    }
    if(action.type== 'green') {  
        newState.color='green';
    }
    if(action.type== 'pink') {
        newState.color='pink';
    }
    if(action.type== 'black') {
        newState.color='black';
    }
    if(action.type== 'white') {
        newState.color='white';
    }

    return newState;
};
const store = createStore(myReducer);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch({type:'blue'});
store.dispatch({type:'green'});
store.dispatch({type:'pink'});
store.dispatch({type:'black'});
store.dispatch({type:'white'});
