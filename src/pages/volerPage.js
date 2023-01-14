import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import Footer	 from '../Components/Footer/index';
import Home from '../Components/VolerProject/home';
import './style.css';
const VolerPage = () => {
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
			<Home/>
			<Footer/>

		</>
		)
}

export default VolerPage;