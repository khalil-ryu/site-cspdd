import React, {useState} from 'react';
import { Sidebar } from '../Sidebar';
import Navbar from '../Navbar';
import InfoSection from '../InfoSection';
import { annonces1 } from '../InfoSection/Data';
import Footer from '../Footer';
import InfoSection2 from '../InfoSection/index2';
import InfoSection3 from '../InfoSection/index3';
import { ImgWrap, Img, InfoWrapper } from '../InfoSection/InfoElements';
import InfoSection4 from '../InfoSection/index4';
const Annonces2 = () => {
	const[isOpen, setIsOpen] = useState(false);
				
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>	
		<InfoSection4 {...annonces1}/>
		
		
		<Footer/>
		</>
		)
}

export default Annonces2;