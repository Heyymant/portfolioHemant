import React from 'react'
import './contacts.scss'
import { useState } from 'react';
export default function Contacts() {
  const[message, setMesasge] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault();
    setMesasge(true)
  }
  return (
    <div className="contacts" id='contacts'>
      <div className="left">
        <img src="assets/shake.svg" />  
      </div>
      <div className="right">
        <h2>Contact.</h2>
         {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type =  "submit">Send</button>
        {message && <span>Thanks for reaching to me.</span>}
        </form> */}
        <a href="https://github.com/Heyymant">
          <img src="assets/github.png" className="git" />
        </a>
        <a href="https://instagram.com/heyy.mant">
          <img src= "assets/insta1.png" className ="insta"/>
        </a>
        <a href="https://www.linkedin.com/in/hemant-kumar-174157193/">
          <img src="assets/linkedin.png"  className ="linkedin" />
        </a>
        <a href="https://www.linkedin.com/in/hemant-kumar-174157193/">
          <img src="assets/linkedin.png"  className ="linkedin" />
        </a>
      </div>
    </div>
  )
}

