import React, { useState } from "react";
import sendEmailIcon from '../../assets/mingcute--send-fill.svg';

export default function Subscription() {
    const [emailAdd, setEmailAdd] = useState('');

    const handleEmailEntry = (event) => {
        console.log(event.target.value)
        setEmailAdd(event.target.value);
    }

    const handleSubscribe = (event) => {
        event.preventDefault()
        console.log("subscribing...", emailAdd)
    }

    return (

        <form id="subscribe" action="">
            <label for="email">Subscribe</label>
            <input type="email" id="email" name="email" placeholder="john_doe@company.com" onChange={handleEmailEntry} />
            <button onClick={handleSubscribe}><img src={sendEmailIcon} alt="Send email icon" /></button>
        </form>

    )
}