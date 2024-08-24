import { useState } from "react"

export const Message = () => {

const [counter,setCounter] = useState (0);
const [message,setMessage] = useState ("");

const handleMessageChange =(event) =>{
    const value = event.target.value
    setMessage(value)
    setCounter(value.length)
}
const charsLimit= 30
    return (
    <div>
        <label htmlFor ="message"> Your message :</label>
        <div>
            <textarea id="message" rows={5} value ={message} onChange={handleMessageChange}></textarea>
        </div>
        <p>{counter}/{charsLimit}</p>
        {message.length > charsLimit ? <div> Message is too long (max 30 chars)</div> :null}
    </div>
)
}