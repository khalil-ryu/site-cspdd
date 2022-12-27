import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import InfoSection	 from '../Components/InfoSection/index';
import {article1, article2} from '../Components/InfoSection/Data';
import Footer	 from '../Components/Footer/index';
import Pictures1 from '../Components/Pictures/Pictures1';
const PicturesPage = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
        <Pictures1/>
			
		<Footer/>
		</>
		)
}

export default PicturesPage;