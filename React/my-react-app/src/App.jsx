//REACT hook  = special function that allows functional components 
//              to use React  feature wihtout create class components
//              (usseState, useEffect, useContext, useReducer, useCallback...) 
import ColorPicker from "./colorPickerApp/ColorPicker";
import "./colorPickerApp/style.css"
function App(){
  
  return(    
    <div>
      <ColorPicker></ColorPicker>
    </div>
  );
} 

export default App
