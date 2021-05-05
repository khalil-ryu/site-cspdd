import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import Logo from './logo.jpg';

import {animateScroll as scroll} from 'react-scroll';
import {Nav, 
	NavbarContainer, 
	Image,
	NavLogo, 
	MobileIcon, 
	NavMenu, 
	NavItem, 
	NavLinks,
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
							<NavLinks to='acceuil'
							smooth= {true} duration= {500} spy={true} exact='true' offset={-80}>
							Acceuil
							</NavLinks>
						</NavItem>
						<NavItem >
							<NavLinks to='about'
							smooth= {true} duration= {500} spy={true} exact='true' offset={-80}>
							Activites
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='discover'
							smooth= {true} duration= {500} spy={true} exact='true' offset={-80}>
							Nos Projets
							</NavLinks>
						</NavItem>
						{/*<NavItem>
							<NavLinks to='services'
							smooth= {true} duration= {500} spy={true} exact='true' offset={-80}>
							Publications
							</NavLinks>
						</NavItem>*/}
						<NavItem>
							<NavGal to='/galeries'
							smooth= {true} duration= {500} spy={true} exact='true' offset={-80}>
							Galeries</NavGal>
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