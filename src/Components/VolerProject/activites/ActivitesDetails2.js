import React, {useState} from 'react';
import { Sidebar } from '../../Sidebar';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { NavLinksRoute } from '../../Navbar/NavbarElements';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Subtitle1, Heading, TextWrapper,InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TopLine,
	BtnWrap,
	ImgWrap,
    Img
	 } from '../../InfoSection/InfoElements';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseIcon from '@mui/icons-material/Close';
import { LazyLoadImage } from 'react-lazy-load-image-component';

  
const cards = [
    {   title: "Planification Stratégique  ",
        subtitle: "Bravo aux participants à la formation 'planification stratégique' dans le cadre du projet Voler de ses propres ailes  par le Centre Stratégique pour la Promotion du Développement Durable/ CSPDD, un projet financé par l'UE. 4 associations de la région de Ben Arous vont bénéficier de tout un programme de renforcement de capacités qui s'étend sur 5 mois. Un grand merci au Coach Sofien Neifoss Asta et au Coworking Space de Jamaity."}
  ];

let data = [];
let photo = {};
photo["imgSrc"] = `https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/11.jpg?raw=true`
data.unshift(photo);
const ActivitesDetails2 = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
    const [model,setModel]=useState(false)
    const [tempimgSrc,setTempimgSrc]=useState('')
    const getImg =(imgSrc)=>{
        setTempimgSrc(imgSrc);
        setModel(true);
    }
	return(	
		< >
		
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
        <InfoContainer lightBg={true} id={0}>
				<InfoWrapper>
					<InfoRow imgStart={true}>
						<Column1>
							<TextWrapper>
                            <Heading lightText={false}>
                                {cards[0].heading}
                            </Heading>
                            <Subtitle1 darkText={true}>
                                {cards[0].subtitle}
                                <br/>
								<br>
                                </br>
                                

                                <a href='https://fb.watch/i5c07zSH3u/' target='_blank'>Video Live</a>
								<NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/Activités2">
                         <ArrowBackIcon   fontSize="large" /> <p>Return</p>


                   </NavLinksRoute>
							</Subtitle1>							
							</TextWrapper>
						</Column1>
						<Column2 >
							<ImgWrap>
							Cliquer pour agrendir
                                <Img src="https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/13.jpg?raw=true" />
                    
     
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
        
        
		<Footer/>
		</>
		)
}

export default ActivitesDetails2;