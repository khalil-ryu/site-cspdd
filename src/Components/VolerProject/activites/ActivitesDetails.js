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
	 } from '../../InfoSection/InfoElements';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseIcon from '@mui/icons-material/Close';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Radium, { StyleRoot } from 'radium';

const mystyle = {
    '@media screen and (max-width: 576px)': {
        alignSelf: "flex-start",
      },
}
  
const cards = [
    {   title: "Présentation",
        subtitle: "Dans le cadre du projet « Voler de ses propres ailes », nous avons organisé notre 1ère réunion avec 3 des associations sélectionnées pour communiquer de plus près et leur présenter notre programme de formation et de soutien ainsi que les procédures de participation. Le président du Centre Stratégique pour la Promotion du Développement Durable et le chef de projet ont également échangé avec les jeunes participants des difficultés et/ ou des problèmes de leurs associations. La réunion a eu lieu le 09 octobre 2022 de 9h30 à 11h30 dans une ambiance d’échange et de bonne humeur dans les locaux de la municipalité d’El Mourouj que nous remercions énormément. 12 membres des bureaux exécutifs des associations ont participé à la réunion et ont exprimé leur grande motivation et leur désir de travailler dans un environnement sain de partage de connaissances et d’expériences en vue de monter de grands projets communs pour la région de Ben Arous ; leur devise étant « Ensemble, on est plus forts ! » Nous avons également eu une réunion à distance avec 4 membres de l’association des Jeunes Créatifs et Conscients de Mhamdia qui n’ont pas pu assister à la réunion en présentiel. La réunion a eu lieu le 10 octobre à 17h et a été très intéressante grâce à l’enthousiasme et à la pertinence des interventions de ces jeunes membres.Dans l’attende du démarrage de ce projet, nous sommes tous très confiants quant à la réussite de notre collaboration."}
  ];

let data = [];
for (let i = 1; i < 10; i++) {
    let photo = {};
    photo["imgSrc"] = `https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/${i}.jpg?raw=true`
    data.unshift(photo);
}
const ActivitesDetails = () => {
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
                        to="/Activités2">
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

export default ActivitesDetails;