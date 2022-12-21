import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import Footer	 from '../Components/Footer/index';
import annonceRecrutement from './annonceRecrutement.jpg';
import first from '../images/1.jpg';
import first_1 from '../images/1-1.jpg';
import second from '../images/2.jpg';

import second_2 from '../images/2-2.jpg';

import third from '../images/3.jpg';


import styled from 'styled-components';
import {
	ColoredHeading
} from '../Components/InfoSection/InfoElements';
export const ServicesCard = styled.div`
	background:  #9CC3D5FF;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 800px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;

	
`

export const ServicesIcon = styled.img`
	height: 500px;
	width: 500px;
	margin-bottom: 10px;
	&:hover {
		transform: scale(2.0);
		transition: all 0.6s ease-in-out;
		cursor: pointer;
	}
`

const Annonces = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
		
	

	return(	
		<>
		<Sidebar isOpen = {isOpen} toggle= {toggle}/>
		<Navbar toggle = {toggle}/>
        
        <ServicesCard >
			<ServicesIcon src={third}/>
		</ServicesCard>
		<ServicesCard >
			<ServicesIcon src={second}/>
		</ServicesCard>
        <ServicesCard >
			<ServicesIcon src={second_2}/>
		</ServicesCard>
        <ServicesCard >
			<ServicesIcon src={first}/>
		</ServicesCard>
		<ServicesCard >
			<ServicesIcon src={first_1}/>
		</ServicesCard>
        <ServicesCard >
			<ServicesIcon src={annonceRecrutement}/>
		</ServicesCard>
		<Footer/>
		</>
		)
}

export default Annonces;