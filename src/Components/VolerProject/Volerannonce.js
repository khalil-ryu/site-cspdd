import React, {useState} from 'react';
import { Sidebar } from '../Sidebar';
import Navbar from '../Navbar';
import InfoSection from '../InfoSection';
import { annonces1,volerannonce } from '../InfoSection/Data';
import Footer from '../Footer';

const Volerannonce = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
		<InfoSection {...volerannonce}/>
		

		<Footer/>
		</>
		)
}

export default Volerannonce