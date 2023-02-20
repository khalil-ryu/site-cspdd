import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import Footer	 from '../Components/Footer/index';
import Annonces from '../Components/galerie/Annonces';

const AnnoncesRedirection = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
        <Annonces/>
        <Footer/>
		</>
		)
}

export default AnnoncesRedirection;