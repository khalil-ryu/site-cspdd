import React, {useState} from 'react';
import image from '../../images/logo.png';
import video from '../../videos/video.mkv';

import {Button} from '../ButtonElement';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	ImgBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from './HeroElements';
import InfoSection2	 from '../InfoSection/index2';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from './Data';

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	}

	return(
		<>
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={video}
				type='video/mp4'/>
				<ImgBg src= {image}/>
			</HeroBg>
		</HeroContainer>
		<HeroContainer id='acceuil'>
			<HeroContent>
				<HeroH1 >Centre Stratégique pour la Promotion du Développement Durable</HeroH1>
				<HeroP>
					Le Centre Stratégique pour la Promotion Du Développement Durable (CSPDD) a été  créé officiellement par la publication au Journal Officiel n° 63 de la République Tunisienne en date du 27.05.2017.
Notre association répond à un souci collectif de ses fondateurs de l'importance  du rôle du développement durable dans la préservation de nos richesses, la protection de l'environnement, la promotion des 17 objectifs du développement durable et fait suite au grand évènement qui a eu lieu à l'ONU par l'adoption de 93 pays, en Septembre 2015, du programme de développement durable à l'horizon 2030, comprenant les 17 objectifs du développement durable  (17 ODD).

				</HeroP>
			</HeroContent>
		</HeroContainer>
		<InfoSection2 {...homeObjOne}/>
		<InfoSection2 {...homeObjTwo}/>
		<InfoSection2 {...homeObjThree}/>
		<InfoSection2 {...homeObjFour}/>
		<InfoSection2 {...homeObjFive}/>
		</>
		)
}

export default HeroSection;