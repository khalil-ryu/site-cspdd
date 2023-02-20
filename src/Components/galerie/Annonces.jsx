import React from 'react';
import './Galerie.css';
import { Link } from 'react-router-dom';
import img from "./cspdd.jpg";
const Annonces = () => {
  return (
    <div className='Galerie-flex'>
      <div className='project-one'>
        <h1 className='Galerie-h1'>
        <Link className='proj-1' to='/AnnoncesProj'>De mon école, à ma ville, à mon lac et à ma méditerranée </Link></h1>  
        <div className='project-one-cercle'>
          <img src={img} class="logo-image" />
        </div>
      </div>
      <div className='Project-two'>
        <h1 className='Galerie-h1'>
        <Link className='proj-1' to='/Volerannonce'>Voler de ses propres ailes </Link></h1>
        <div className='project-two-cercle'></div>
      </div>
    </div>
  )
}
export default Annonces