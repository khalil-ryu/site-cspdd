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
	 } from '../../InfoSection/InfoElements';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseIcon from '@mui/icons-material/Close';
import { LazyLoadImage } from 'react-lazy-load-image-component';

  
const cards = [
    {   title: "Présentation",
        subtitle: "Dimanche 11 décembre 2022 dans le cadre du projet Voler de ses propres ailes par le Centre Stratégique Pour La Promotion Du Développement Durable - CSPDD : Démarrage de la 1ère séance de formation sur la réglementation tunisienne en matière de la protection de l'environnement, l'état des lieux de la pollution dans la région de Ben Arous et son impact sur l'écosystème. Cette formation est assurée par Mme Faiza Labidi, expert et auditeur en environnement."}
  ];

let data = [];
for (let i = 122; i < 131; i++) {
    let photo = {};
    photo["imgSrc"] = `https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/${i}.jpg?raw=true`
    data.unshift(photo);

}
const ActivitesDetails8 = () => {
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
                                <a href='https://fb.watch/i5nYbnbyDb/' target='_blank'>Video Live</a>
                            </Subtitle1>							
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
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

export default ActivitesDetails8;