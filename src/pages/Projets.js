import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import InfoSection2	 from '../Components/InfoSection/index2';
import InfoSection3	 from '../Components/InfoSection/index3';

import {homeObjTwo, projectTwo, descriptionProjet, descriptionProjet2} from '../Components/InfoSection/Data'
import Footer	 from '../Components/Footer/index';
import annonce from './annonce.jpg';
import annonceRecrutement from './annonceRecrutement.jpg';

import styled from 'styled-components';
import Description from '../Components/Description/projet';

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

const NosProjets = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
		
	

	return(	
		<>
		<Sidebar isOpen = {isOpen} toggle= {toggle}/>
		<Navbar toggle = {toggle}/>
		{/* <InfoSection2 {...projectTwo}/> */}
		<InfoSection2 {...homeObjTwo}/>
		<ServicesCard >
			<ServicesIcon src={annonce}/>
		</ServicesCard>
		
		<Description lightBg = {true} id = {NosProjets} lightText = {false} darkText={true}/>

		<Footer/>
		</>
		)
}

export default NosProjets;