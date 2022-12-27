import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import Footer	 from '../Components/Footer/index';
import Galerie from '../Components/galerie/Galerie';

const GaleriesPage = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
		<Galerie/>
		<Footer/>
		</>
		)
}

export default GaleriesPage;