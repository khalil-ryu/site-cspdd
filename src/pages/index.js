import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import HeroSection	 from '../Components/HeroSection/index';

import Footer	 from '../Components/Footer/index';
import './style.css'
const Home = () => {
	// [name of state, function that updates it]= useState(current state)
	// the second paramater which is a function is used to change the state value
	// if it changes, react will re-render
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(
		<>
			<Sidebar isOpen= {isOpen} toggle= {toggle}/>
			<Navbar toggle= {toggle}/>
			<HeroSection/>
			
			
			
			{/*<Services/>
			<InfoSection {...homeObjThree}/>*/}
			<Footer/>

		</>
		)
}

export default Home;