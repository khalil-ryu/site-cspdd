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

  
const cards = [
    {   title: "Journée porte ouverte AJCC X AJIC",
        subtitle: "Bravo aux 2 associations qui ont organisé leur journée porte ouverte en présence du président du  Centre Stratégique Pour La Promotion Du Développement Durable - CSPDD et de la chef du projet Voler de ses propres ailes dans la Maison des Jeunes Fouchana. AJCC Mhamdia جمعية الشباب المبدع و الواعي بالمحمدية et جمعية شباب مبادرون بالخليدية  ont organisé des activités de team building, ont présenté quelques actions qui représentent le mieux leus associations et discuté la possibilité de se rapprocher plus pour travailler sur des projets communs qui auront un impact durable sur toute la région."}
  ];

let data = [];
for (let i = 85; i < 95; i++) {
    let photo = {};
    photo["imgSrc"] = `https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/${i}.jpg?raw=true`
    data.unshift(photo);

}
const ActivitesDetails9 = () => {
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
                                <br/>                                <br>
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
						<Column2>
							<ImgWrap>
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

export default ActivitesDetails9;