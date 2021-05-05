import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import Logo from './logo.jpg';
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
									<a href='https://www.facebook.com/EcoPactLacBizerte' target='_blank'>
										<Img  src="https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/48366270_923433767845402_4537922592228507648_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=973b4a&_nc_ohc=lOq-77pGAnAAX-jq2qK&_nc_ht=scontent.ftun7-1.fna&oh=f840846adfe7a4a2d99f2ea1e59a5566&oe=60AC655C"/>
									</a>
									<a href='https://europa.eu/european-union/index_fr' target ='_blank'>
										<Img  src="https://www.fiacat.org/images/categories/logo-union-europeenne.jpg"/>
									</a>
									<a href='https://www.ebrd.com/home' target= '_blank'>
										<Img  src="https://www.econostrum.info/photo/art/default/49096171-38301007.jpg?v=1597747419"/>
									</a>
									<a href='https://www.eib.org/fr/index.htm' target='_blank'>	
										<Img  src="http://ficom-conseil.com/wp-content/uploads/2017/03/86ab85dc76588e656139a033279b772c654fe4ef.jpeg"/>
									</a>
									<a href='https://www.facebook.com/MinALEnv/?ref=page_internal' target='_blank'>
										<Img width='60' height='40' src='https://scontent.ftun12-1.fna.fbcdn.net/v/t1.6435-9/119996752_3259710447439895_40420416110385768_n.png?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=CVvRzfSoVVQAX8wnJUA&_nc_ht=scontent.ftun12-1.fna&oh=5d7b6f2ef711d4fa08adc000a51a01b5&oe=60B64147'/>
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


