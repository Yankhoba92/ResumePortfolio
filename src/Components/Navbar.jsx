import { useState } from 'react'
import logo from "../assets/media/logoV2.png"
import { Link } from 'react-router-dom'



function Nav() {


  return (
    <>
      <header>
        <nav>
            <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
            <ul>
                <li><Link to="/">A propos</Link></li>
                <li><Link to="/competences">Compétences</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav
