import React, {useState} from 'react';
import { Sidebar } from '../Sidebar';
import Navbar from '../Navbar';
import InfoSection from '../InfoSection';
import { annonces1 } from '../InfoSection/Data';
import Footer from '../Footer';
const Annonces2 = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
		<InfoSection {...annonces1}/>
		

		<Footer/>
		</>
		)
}

export default Annonces2;