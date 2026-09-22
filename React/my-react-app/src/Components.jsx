import { func } from "prop-types";
import { use, useState } from "react"

//onChange = even handle used primary with form elements
//      ex: <input>, <textarea>, <select> <radio>
//      TRIGGER A FUNCTION WHEN THE VALUE OF THE INPUT CHANGE 

function Component(){
//set user name
 const [name, setName] = useState("Guest");
//amount of product number 
 const [quantity, setQuantity] = useState(1);
//comment 
 const [comment, setComment] = useState();
 //payment
 const[payment, setPayment] = useState("");
 //shipping
 const[shipping, setShipping] = useState("Delivery");


 function handleNameChange(event){
    setName(event.target.value)
 }

 function handleQuantityChange(event){
    setQuantity(event.target.value);
 }

 function handleComment(event){
    setComment(event.target.value)
 }
 function handlePayment(event){
    setPayment(event.target.value)
 }
 function  handleShipping(event){
    setShipping(event.target.value)
 }

 return(
    <div>
        <input onChange={handleNameChange} value={name}/>
        <p>Name: {name}</p>
        
        <input onChange={handleQuantityChange} value={quantity} type="number" />
        <p>Number: {quantity}</p>

        <textarea value={comment} onChange={handleComment} placeholder="enter delivery guide" ></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePayment} >
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
            <input type="radio" value="Pick up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShipping}/>Pick up
        </label>
        <label htmlFor="">
            <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShipping}/>Delivery
        </label>
        <p>Shipping: {shipping}</p>


    </div>
 )
}
export default Component