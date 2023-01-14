import React from 'react'
import './galeries.css';
import { Router,Routes,Link } from 'react-router-dom';
import { NavLinksRoute } from './NavbarElements';
const Dropdown2 = () => {
  return (
    <div className='main'>
        <ul>
            <li>
                <a href='#'>Nos projets</a>
                <ul className='dropdown'>
                    <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true} 
                        exact='true'  
                        to="/NosProjets">
                        De mon ecole...
                    </NavLinksRoute>
                    <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/Projet2">
                        Voler de ses ...
                    </NavLinksRoute>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Dropdown2;