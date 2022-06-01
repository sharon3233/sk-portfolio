import React from 'react'
import "./topbar.scss"
import {Person,Email} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>Full Stack Developer</a>
                <div className="itemContainer">
                    <Person className="icon" />
                    <span>44 4 4 444</span>
                </div>
                <div className="itemContainer">
                    <Email className="icon"/>
                    <span>shalaskin29@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div> 
            </div>
        </div>
    </div>
  )
}
