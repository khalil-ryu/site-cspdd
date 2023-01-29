import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'; //different page
import {Link as LinkS} from 'react-scroll'; //used for scroll in one page

// styled.tag
// write all properties after ` just like in css
	
export const Nav = styled.nav`
	background: #0063B2FF;
	height: 60px;
 	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}

`

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
	@media screen and (max-width: 480px) {
		padding: 5px ;
	}

`
// this componenet will use react router and it will accept a link 
// when trigered it will go to that link
export const Image = styled.img`
	width= 60px ;
	height= 60px ;
	max-width: 60px;
	margin-right: 5px;
	@media screen and (max-width: 480px) {
		width: 40px;
		height: 40px;
	}
`
export const NavLogo = styled(LinkR)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 5px;
	font-weight: bold;
	text-decoration: none;
	@media screen and (max-width: 480px) {
		font-size: 1.2rem;

	}
`

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 946px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 946px) {
		display: none;
	}
`

export const NavItem = styled.li`
	height: 80px;
`

export const NavLinks = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;	

	&.active {
		background-color: #9CC3D5FF;
		color: #0063B2FF;
    	border-radius: 4px;
   		transition: all 0.2s ease-out;

	}

`
export const NavLinksRoute = styled(LinkR)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;	
	
	&:hover {
		background-color: #9CC3D5FF;
		color: #0063B2FF;
    	border-radius: 4px;
   		transition: all 0.2s ease-out;

	}

`
export const NavGal = styled(LinkR)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;	

	&:hover {
		background-color: #9CC3D5FF;
		color: #0063B2FF;
    	border-radius: 4px;
   		transition: all 0.2s ease-out;

	}

`
export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 946px) {
		display: none
	}
`

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: #9CC3D5FF;
	white-space: nowrap;
	padding: 10px 22px;
	color: #fff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`