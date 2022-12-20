import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import Logo from './logo.png';
import drapeau from './dapeau.jpg'
import {FooterContainer,
	FooterWrap, 
	FooterLinksContainer, 
	FooterLinkWrapper, 
	FooterLinkItems,
	FooterLinkTitle, 
	FooterLink,
	ImgWrapper,
	Img,
	SocialMedia,
	SocialLogo,
	SocialMediaWrap,
	WebsiteRights,
	SocialIcons,
	SocialIconLink
} from './FooterElements'
const Footer = () => {

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinkWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Contacter Nous </FooterLinkTitle>
								<FooterLink >Email: cspddtunisie@gmail.com</FooterLink>
								<FooterLink >Tél: +216 92 910 230</FooterLink>
								<FooterLink >9 Rue de Belgique 3ème étage - 1000 Tunis</FooterLink>

						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Nos Partenaires </FooterLinkTitle>
								<ImgWrapper style= {{'display': 'flex',  'justify-content': 'space-between', 'padding-right': '100px'}} >
									<Img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/langfr-225px-Flag_of_Tunisia.svg.png"/>
									<a href='https://europa.eu/european-union/index_fr' target ='_blank'>
										<Img  src={drapeau}/>
									</a>
									<a href='https://www.facebook.com/MinALEnv/?ref=page_internal' target='_blank'>
										<Img width='60' height='40' src='https://github.com/khalil-ryu/cspdd-images/blob/master/ministere.jpg?raw=true'/>
									</a>
									<a href='https://www.facebook.com/EcoPactLacBizerte' target='_blank'>
										<Img  src="https://github.com/khalil-ryu/cspdd-images/blob/master/ecopact.jpg?raw=true"/>
									</a>
									
									<a href='https://www.ebrd.com/home' target= '_blank'>
										<Img  src="https://www.econostrum.info/photo/art/default/49096171-38301007.jpg?v=1597747419"/>
									</a>
									<a href='https://www.eib.org/fr/index.htm' target='_blank'>	
										<Img  src="https://www.pouvoirsafrique.com/wp-content/uploads/2016/10/BEI-logo-UE.jpg"/>
									</a>
									
								</ImgWrapper>
						</FooterLinkItems>
					</FooterLinkWrapper>
				</FooterLinksContainer>	
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
						<Img src={Logo}/>
							CSPDD
						</SocialLogo>
						<WebsiteRights> CSPDD © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
						<SocialIcons>
							<SocialIconLink href='https://www.facebook.com/Centre-Strat%C3%A9gique-Pour-La-Promotion-Du-D%C3%A9veloppement-Durable-CSPDD-1316871961720911' target='_blank' aria-label='Facebook'>
								<FaFacebook/>
							</SocialIconLink>
							
							<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
								<FaTwitter/>
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
								<FaLinkedin/>
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>	
				</SocialMedia>
			</FooterWrap>			
		</FooterContainer>
	)
}

export default Footer;


