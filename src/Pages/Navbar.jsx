import React from 'react'
import logo from "../assets/logo.png"
import hamburger from "../assets/hamburger.png"
import searchicon from "../assets/searchicon.png"
import avatarlady from "../assets/avatarlady.png"
import { useState } from 'react'

function Navbar() {

    const [toggle,setToggle] = useState(false)
    const [classNames,setClassName] = useState('nav-list-hide')

    const handleClick =()=>{
      setToggle(!toggle)
    }

    return (
        <>
                <nav class="container">
                            <div class="logo-section">
                                   <img class="logo" src={logo} alt="logo"/>
                                    <div class="search-block">
                                       
                                        <img src={searchicon} alt="search-icon"/>
                                        <input type="text" placeholder="Search for rooms or homes..."/>
                                    </div>
                            </div>

                           
                            <img class="hamburger" src={hamburger} alt="hamburger" link onClick={handleClick} style={{cursor:"pointer"}}/>

                            <ul className={toggle ? "nav-list-show" : classNames}>
                                <li>
                                    <a href="#">Become a host</a>
                                </li>
                                <li>
                                    <a href="#">Trips</a>
                                </li>
                                <li>
                                    <a href="#">Messages</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={avatarlady} alt="avatar"/>
                                    </a>
                                </li>
                            </ul>
                </nav>
        </>
    )
}

export default Navbar
