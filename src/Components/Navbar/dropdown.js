import React from 'react'
import './galeries.css';
import { Router,Routes,Link } from 'react-router-dom';
import { NavLinksRoute } from './NavbarElements';
const Dropdown = () => {
  return (
    <div className='main'>
        <ul>
            <li>
                <a href='#'>Galeries</a>
                <ul className='dropdown'>
                    <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true} 
                        exact='true'  
                        to="/Galeries">
                        Images
                    </NavLinksRoute>
                    <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/videos">
                        Videos
                    </NavLinksRoute>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Dropdown;