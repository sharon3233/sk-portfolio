import React from 'react'
import "./intro.scss"


export default function Intro() {

  return (
    <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
                <img src="assets/Me.JPEG" alt=""/>
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hello, Im</h2>
                <h1>Sharon Kindles</h1>
                <h3>Full Stack Developer</h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down_arrow.png" alt=""/>
            </a>
        </div>
    </div>
  )
}
