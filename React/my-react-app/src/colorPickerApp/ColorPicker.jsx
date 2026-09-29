import { useState } from "react"

function ColorPicker(){
    const[color, setColor] = useState("#FFFFFF")
    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <div className="colorpicker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>selected: {color}</p>
            </div>
            <label htmlFor="">select a color</label>
            <input className="input-container" type="color" value={color} onChange={handleColorChange} />
        </div>
    )

}
export default ColorPicker