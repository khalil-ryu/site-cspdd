import React from 'react';
import {SidebarContainer,
		Icon, 
		CloseIcon,
		SidebarWrapper,
		SidebarMenu,
		SidebarLink,
		SidebarGal,
		SideBtnWrap,
		SidebarRoute,
	} from './SidebarElements'
export const Sidebar = ({toggle, isOpen}) => {
	return(
		<SidebarContainer isOpen= {isOpen} onClick={toggle}>
			<Icon onClick= {toggle}>
				<CloseIcon/>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="acceuil" onClick= {toggle}>Acceuil</SidebarLink>
					<SidebarLink to="about" onClick= {toggle}>Activites</SidebarLink>
					<SidebarLink to="discover" onClick= {toggle}>Nos Projets</SidebarLink>
					{/*<SidebarLink to="services" onClick= {toggle}>Publications</SidebarLink>*/}
					<SidebarGal to="/galeries" onClick= {toggle}>Galeries</SidebarGal>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/contact">Contacter Nous</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
		)
}

// wrapper able you to center content