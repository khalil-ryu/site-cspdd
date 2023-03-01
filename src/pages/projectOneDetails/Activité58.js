import React, {useState} from 'react';
import { Sidebar } from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { NavLinksRoute } from '../../Components/Navbar/NavbarElements';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Subtitle1, Heading, TextWrapper,InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TopLine,
	BtnWrap,
	ImgWrap,
	 } from '../../Components/InfoSection/InfoElements';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseIcon from '@mui/icons-material/Close';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Radium, { StyleRoot } from 'radium';
import { details } from '../activitiesDetails';
const mystyle = {
    '@media screen and (max-width: 576px)': {
        alignSelf: "flex-start",
      },
}
  

const cards = [
    {   title: "Présentation",
        subtitle: "Dans le cadre du projet de sensibilisation et d'éducation environnementale cofinancé par l'UE, s'est tenue le 21.07.2022 la séance du groupe de vidéo et montage animée par le consultant Mr Haithem Bergaoui fondateur de la maison d'Art où a eu lieu la formation. Le CSPDD et les membres du club de cinéma de Menzel Bourguiba ont été  honorés par la présence de Mme Houda Baccouri Ep Jmili la directrice du collège Ibn Charaf, de Mr Youssef Saidi professeur et encadreur des éleves du lycée Ibn Sina depuis le début du projet .Le club a aussi été enthousiasmé par la visite de Mr Hichem Jmili professeur de l'enseignement primaire et membre d'un programme avec l'UNESCO pour l'education. Je tiens à remercier les parents qui ont accompagnés les jeunes filles , leurs mots de satisfaction de remerciement pour le staff du CSPDD. Ensemble pour une jeunesse engagé pour etre  une citoyenneté responsable et active pour le développement de leur région sur tous les plans à partir de leurs établissements "
    }
  ];

let data = [];
for (let i = 167; i < 170; i++) {
    let photo = {};
    photo["imgSrc"] = `https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/${i}.jpg?raw=true`
    data.unshift(photo);
}
const Activité58 = () => {
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
        
        <InfoContainer lightBg={true} id={0} >
            
            <InfoWrapper >            
        			<InfoRow imgStart={true}>
						<Column1 >
							<TextWrapper>
                            <Heading lightText={false}>
                                {cards[0].heading}
                            </Heading>
                            <Subtitle1 darkText={true}>
                                {cards[0].subtitle}
                                <br>
                                </br>
                                <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/Activités">
                         <ArrowBackIcon   fontSize="large" /> <p>Return</p>


                   </NavLinksRoute>
                            </Subtitle1>		
                            
							</TextWrapper>
						</Column1>
						<Column2 >
                            <ImgWrap >
                            Cliquer pour agrendir
                            <div className={model ? "model open" : "model"}>
                                <img src={tempimgSrc} />
                                <CloseIcon onClick={()=> setModel(false)}/>
                            </div>
                            <div className='gallery'>
                            {/* {loading ? (
                            <div className='loading-beta'>
                            <BeatLoader color="#36d7b7" size="80" />

                            </div>
                        ):(
                            */}
                                {
                                data.map((item,index)=> {
                                    return(
                                        <div className='pics' key={index} onClick={()=> getImg(item.imgSrc )}>
                                            <LazyLoadImage src={item.imgSrc} style={{width:'100%'}} effect="blur"/>
                                        </div>
                                    )
                                })
                                }
                        
                            </div>
     
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
                
			</InfoContainer>
		<Footer/>
		</>
		)
}

export default Activité58;