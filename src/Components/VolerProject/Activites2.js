import React, {useState} from 'react';
import { Sidebar } from '../Sidebar';
import Navbar from '../Navbar';
import InfoSection from '../InfoSection';
import { activites1, activites2, activites3, activites4, activites5, activites6, activites7, activites8 } from '../InfoSection/Data';
import Footer from '../Footer';
const Activites2 = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
		<InfoSection {...activites1}/>
		<InfoSection {...activites2}/>
		<InfoSection {...activites3}/>
		<InfoSection {...activites4}/>
		<InfoSection {...activites5}/>
		<InfoSection {...activites6}/> 
		<InfoSection {...activites7}/> 
		<InfoSection {...activites8}/> 

		<Footer/>
		</>
		)
}

export default Activites2;