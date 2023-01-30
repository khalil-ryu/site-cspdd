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
    {   title: "",
        subtitle: "Bravo pour l'association Volonté et Citoyenneté  à Mornag qui a organisé sa journée portes ouvertes en présence Mr Lotfi Ben Maaoui  le président du Centre Stratégique Pour La Promotion Du Développement Durable - CSPDD dans le Centre Fly_High à Mornag. Les membres de l'association ont présenté leurs activités pour les nouveaux adhérents. Merci pour Mme Dorsaf la présidente et le bureau exécutif et tous les membres et adhérents pour leur engagement. "}
  ];

let data = [];
for (let i = 131; i < 136; i++) {
    let photo = {};
    photo["imgSrc"] = `https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/${i}.jpg?raw=true`
    data.unshift(photo);

}
const ActivitesDetails10 = () => {
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
                         <ArrowBackIcon   fontSize="large"  /> <p>Return</p>


                   </NavLinksRoute>

                            </Subtitle1>							
							</TextWrapper>
						</Column1>
						<Column2 >
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

export default ActivitesDetails10;