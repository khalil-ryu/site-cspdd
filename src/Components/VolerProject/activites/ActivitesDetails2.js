import React, {useState} from 'react';
import { Sidebar } from '../../Sidebar';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
photo["imgSrc"] = `https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/315052142_125024407052367_2241573289619841579_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PdOm_pNhm8kAX__1F0j&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAB_YqE_p7SbvzT_nrdvC5E4AUOtRrKbyIa-pBMYQs7YQ&oe=63CA4ED4`
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
                                <a href='https://fb.watch/i5c07zSH3u/' target='_blank'>Video Live</a>
                            </Subtitle1>							
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
							Cliquer pour agrendir
                                <Img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/315052142_125024407052367_2241573289619841579_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PdOm_pNhm8kAX__1F0j&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAB_YqE_p7SbvzT_nrdvC5E4AUOtRrKbyIa-pBMYQs7YQ&oe=63CA4ED4" />
                    
     
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