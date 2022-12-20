import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import InfoSection	 from '../Components/InfoSection/index';
import {article1, article2} from '../Components/InfoSection/Data';
import Footer	 from '../Components/Footer/index';

const Articles = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
		<InfoSection {...article1}/>
        <InfoSection {...article2}/>

			
		<Footer/>
		</>
		)
}

export default Articles;