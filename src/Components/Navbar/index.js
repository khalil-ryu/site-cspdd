import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import Logo from './logo.png';
import Dropdown from './dropdown';
import Dropdown2 from './dropdown2';

import {animateScroll as scroll} from 'react-scroll';
import {Nav, 
	NavbarContainer, 
	Image,
	NavLogo, 
	MobileIcon, 
	NavMenu, 
	NavItem, 
	NavLinks,
	NavLinksRoute,
	NavGal,
	NavBtn,
	NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	}
	useEffect(() => {
			window.addEventListener('scroll', changeNav);
		}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	}
	return(
		<>
		<IconContext.Provider value = {{color: '#fff'}}>
			<Nav scrollNav= {scrollNav}>
				<NavbarContainer>
					
					<NavLogo to='/' onClick={toggleHome}>
					<Image src={Logo}/>
					CSPDD</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem >
							<NavLinksRoute to='./'
							smooth= {true} duration= {500} spy={true} exact='true'>
							Acceuil
							</NavLinksRoute>
						</NavItem>
						<NavItem >
							<NavLinksRoute to='/Activités'
							smooth= {true} duration= {500} spy={true} exact='true' >
							Activités
							</NavLinksRoute>
						</NavItem>
						<NavItem>
							<NavLinksRoute to='/NosProjets'
							smooth= {true} duration= {500} spy={true} exact='true' >
							<Dropdown2/>
							</NavLinksRoute>
						</NavItem>
						<NavItem>
							<NavLinksRoute to='/Articles'
							smooth= {true} duration= {500} spy={true} exact='true'>
							Articles
							</NavLinksRoute>
						</NavItem>
						<NavItem>
							<NavLinksRoute to='/Annonces'
							smooth= {true} duration= {500} spy={true} exact='true'>
							Annonces
							</NavLinksRoute>
						</NavItem>
						<NavItem style={{paddingTop: "30.5px"}}>
								<Dropdown/>
							
						</NavItem>
						
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/contact">Nous Contacter</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
		</>
	);
}

export default Navbar;