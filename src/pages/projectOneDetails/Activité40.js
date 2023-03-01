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
        subtitle: "Dans le cadre du projet de sensibilisation et l'éducation environnementale cofinancé par l'UE, le 06.05.2022 ont été organisées les élections du bureau exécutif  du club de développement durable au lycée Menzel Jemil. Les résultats sont comme suit : Le Président : Mr Farouk Amiri. Le Vice Président : Mr Abelkader Ben Ghara. Le Sécrétaire Général : Mr Ali Hania. En présence du Directeur du lycée Mr kais Mazhoudi, du professeur encadreur Mr Youssef Ghribi et du secrétaire général du CSPDD, Mr Samir Montassar. Toutes nos félicitations pour les élus"
    }
  ];

let data = [];
for (let i = 107; i < 111; i++) {
    let photo = {};
    photo["imgSrc"] = `https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/${i}.jpg?raw=true`
    data.unshift(photo);
}
const Activité40 = () => {
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

export default Activité40;