import { useState } from 'react'
import logo from "../assets/logo.png"
import "../index.css"

function Nav() {


  return (
    <>
      <header>
        <nav>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <ul>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Réalisations</a></li>
                <li><a href="#">Experiences</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav
