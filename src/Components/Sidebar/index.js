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
					<SidebarR to="/NosProjets" onClick= {toggle}>De mon école ...</SidebarR>
					<SidebarR to="/Projet2" onClick= {toggle}>Voler de ses ...</SidebarR>
					<SidebarR to="/Articles" onClick= {toggle}>Articles</SidebarR>
					<SidebarR to="/Annonces" onClick= {toggle}>Annonces</SidebarR>
					<SidebarGal to="/galeries" onClick= {toggle}>Galeries</SidebarGal>
				</SidebarMenu>
				
			</SidebarWrapper>
		</SidebarContainer>
		)
}

// wrapper able you to center content