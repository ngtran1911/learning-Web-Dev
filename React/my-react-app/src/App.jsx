//REACT hook  = special function that allows functional components 
//              to use React  feature wihtout create class components
//              (usseState, useEffect, useContext, useReducer, useCallback...) 
import Counter from "./CounterApp/Counter";
import "./CounterApp/counterStyle.css";

function App(){
  
  return(    
    <div>
      
      <Counter></Counter>
    </div>
  );
} 

export default App
