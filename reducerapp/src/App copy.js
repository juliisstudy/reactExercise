import './App.css';
import {useState,useReducer} from 'react';

const reducer = (state,action)=>{
  switch(action.type){
    case 'increment':
      return { ...state,count: state.count+1};
    case 'decrement':
      return {...state,count:state.count-1};
    
    case 'newUserInput':
      return {...state,userInput:action.payload}
    case 'tgColor':
      return {...state,color:!state.color}
    default:
      throw new Error();
  }
}
const ACTION ={
  INCREMENT:'increment',
  DECREMENT:'decrement',
  NEW_USER_INPUT:'newUserInput',
  TG_COLOR:'tgColor'
}

function App() {
  const [state,dispatch]=useReducer(reducer,{count:0,userInput:'',color:false})



  return (
    <div className="App" style={{color:state.color?'#FFF':'#FFF952'}}>
      <input 
        type = "text" value = {state.userInput} onChange = {(e)=>dispatch({type:ACTION.NEW_USER_INPUT,payload:e.target.value})}
        />
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:ACTION.DECREMENT})}>-</button>
        <button onClick={()=>dispatch({type:ACTION.INCREMENT})}>+</button>
        <p>{state.userInput}</p>
    </div>
  );
}

export default App;
