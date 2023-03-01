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
        subtitle: "Dans le cadre du projet de sensibilisation et d'éducation environnementale cofinancé par l'UE, le 14.05.2022 s'est tenu un atelier de formation sur les objectifs du développement durable 2030 animé par le président du CSPDD au collège Menzel Bourguiba pour le club de développement durable. Des intéractions  ont eu lieu entre les participants  et le formateur ce qui a permis une meilleure compréhension des ODD et la transversalités entre tous les objectifs. Un Quiz a été distribué aux élèves pour évaluer leur degré de compréhension, les résultats seront communiqués très prochainement. Bravo à tous les participants et félicitations pour votre sérieux et engagement. "
    }
  ];

let data = [];
for (let i = 123; i < 126; i++) {
    let photo = {};
    photo["imgSrc"] = `https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/${i}.jpg?raw=true`
    data.unshift(photo);
}
const Activité45 = () => {
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

export default Activité45;