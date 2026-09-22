import { useState } from "react";
function MyComponent (){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState('false');

    const updateName = () => {
        setName("Vivi")
    }

    const updateAge = () =>{
        setAge(age + 1);
    }
    const updateISEmployed = () => {
        setIsEmployed(!isEmployed)

    } 

    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}>Click me to set name</button>

            <p>Age : {age} </p>
            <button onClick={updateAge}>Click = increase age</button>

            <p> Is employed: {isEmployed ? "employed" : "no job" }</p>
            <button onClick={updateISEmployed}>update is employ</button>
        </div>
    )
}
export default MyComponent;