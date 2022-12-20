import React from 'react';
import {SidebarContainer,
		Icon, 
		CloseIcon,
		SidebarWrapper,
		SidebarMenu,
		SidebarLink,
		SidebarR,
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
					<SidebarR to="./" onClick= {toggle}>Acceuil</SidebarR>
					<SidebarR to="/Activités" onClick= {toggle}>Activités</SidebarR>
					<SidebarR to="/NosProjets" onClick= {toggle}>Nos Projets</SidebarR>
					<SidebarR to="/Articles" onClick= {toggle}>Articles</SidebarR>
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