function Button (){
    let count = 0;
    const handleClick = () => console.log("OUCH");
    const handleClick2 = (name) =>  console.log(`${name} stop click me` );
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} clicked me ${count} time`)
        }else{
            console.log(`${name} stop clicking meee`)
        }
    }

    const handleClick4 = (e) => e.target.textContent = "OH NOO"
    return (
        <button onClick = { (e) => handleClick4(e)}>Click me</button>
    )

}
export default Button