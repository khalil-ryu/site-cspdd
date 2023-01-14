import React, {useState} from 'react';
import { Sidebar } from '../Sidebar';
import Navbar from '../Navbar';
import InfoSection from '../InfoSection';
import { articles1, articles2 } from '../InfoSection/Data';
import Footer from '../Footer';
const Articles2 = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
		<InfoSection {...articles1}/>
        <InfoSection {...articles2}/>


		<Footer/>
		</>
		)
}

export default Articles2;