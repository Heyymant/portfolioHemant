import React from 'react'
import { init } from 'ityped'
import { useEffect , useRef} from "react"
import "./intro.scss"
import { ImportExportTwoTone } from '@material-ui/icons'

export default function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init( textRef.current ,{
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Designer", "Developer"],
    }
    );

  },[]); 

  return (
    <div className="intro" id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile1-removebg-preview.png" />
        </div>
      </div>
      <div className="right">
          <div className="wrapper">
            <h2>Hi there, I am</h2>
            <h1>Hemant</h1>
            <h3>Engineering Student <span ref ={textRef }>Developer</span></h3>
          </div>
          <a href='#portfolio'>
            <img src= "assets/down.png" />
          </a>
      </div>
    </div>
  )
}
