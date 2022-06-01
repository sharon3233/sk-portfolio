import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="container">
          <div className="item">
            <img src="assets/Inventory-App.png" class="img-fluid" alt=""/>
            <h3>Inventory App</h3>
          </div>
          <div className="item">
            <img src="assets/Inventory-App.png" class="img-fluid" alt=""/>
            <h3>Inventory App</h3>
          </div>
          <div className="item">
            <img src="assets/Inventory-App.png" class="img-fluid" alt=""/>
            <h3>Inventory App</h3>
          </div>
          <div className="item">
          <a href="https://murmuring-chamber-30533.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="assets/Restaurant-App.png" alt=""/>
          </a>
            <h3>BBQ Feedback App</h3>
          </div>
          <div className="item">
            <a href="https://react-chore-bot.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="assets/Chore-App.png" alt=""/>
            </a>
            <h3>Chore App</h3>
            
          </div>
          <div className="item">
            <a href="https://murmuring-chamber-30533.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="assets/Inventory-App.png" alt=""/>
            </a>
            <h3>Inventory App</h3>
          </div>
        </div>
    </div>
  )
}
