import React from 'react'
import "./style.css";
import { NavLinksRoute } from '../Navbar/NavbarElements';

export default function Home() {
  return (
    <div class="panels">
        <div class="panel panel1">
            <p></p>
            <p> 
                <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/Activités2">
                        Activites
                    </NavLinksRoute>
            </p>
            <p></p>
        </div>
        <div class="panel panel2">
            <p></p>
            <p> 
                <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/Annonces2">
                        Annonces
                    </NavLinksRoute>
            </p>
            <p></p>
        </div>
        <div class="panel panel3">
            <p></p>
            <p> 
                <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/Articles2">
                        Articles
                    </NavLinksRoute>
            </p>
            <p></p>
        </div>
    </div>
  )
}
