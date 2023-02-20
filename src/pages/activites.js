import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import InfoSection	 from '../Components/InfoSection/index';

import {homeObjOne,homeObjOne1,homeObjOne2, homeObjOne3,homeObjOne4, homeObjTwo, homeObjThree} from '../Components/InfoSection/Data'
import Footer	 from '../Components/Footer/index';

const Activites = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
		<InfoSection {...homeObjOne}/>
			<InfoSection {...homeObjOne1}/>
			<InfoSection {...homeObjOne2}/>
			<InfoSection {...homeObjOne3}/>
			<InfoSection {...homeObjOne4}/>
		<Footer/>
		</>
		)
}

export default Activites;
