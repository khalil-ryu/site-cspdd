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
    {   title: "Présentation",
        subtitle: "Dimanche 25/12/2022 de 9h à 15h: sortie environnementale dans quelques régions de Ben Arous: Radès, Borj Cedria, Mornag, Mhamdia, Khlidia! Un événement organisé par le Centre Stratégique Pour La Promotion Du Développement Durable - CSPDD dans le cadre du projet Voler de ses propres ailes "}
    ,{   title: "Présentation",
        subtitle: "Oued Sliman où nous avons assisté à un paysage désolant des eaux infectes et une odeur insupportable ! Nous avons dû nous boucher les narines pour prendre des photos et enregistrer des vidéos ! La responsabilité de cette situation incombe au Ministère de l'agriculture qui ne réagit pas et qui ne permet pas à d'autres organismes d'intervenir. D'après les jeunes de l'association qui ont déjà travaillé sur le dossier de l'environnement dans la région, les terres avoisinantes sont devenues complètement stériles! On ne peut que déplorer de telles catastrophes dans l'attente que les responsables fassent leur travail !"}
    ,{   title: "Présentation",
        subtitle: "Lors de notre visite environnementale du 25 décembre, nous avons exploré 'région de la Carrière' comme on l'appelle où l'on pouvait voir de loin la fumée qui se dégageait des déchets brûlés. En s'approchant petit à petit, des montagnes de déchets industriels dangereux (verre, porcelaine, plastique et autres) s'erigeaient des deux côtés du chemin et s'étendaient à perte de vue! D'après l'une des rares personnes que nous avons rencontrées, ce dépôt à ciel ouvert et en pleine nature était légal parce que les usines avaient l'autorisation de la municipalité et louaient cet endroit pour acheminer tous leurs déchets. Des vidéos seront publiées pour témoigner de la dégradation de tout l'écosystème. Qui se soucie de la préservation de la nature et qui pense aux futures générations ! Personne!"}
    ,{   title: "Présentation",
    subtitle: "Notre visite environnementale du 25 décembre a pris fin dans le site archéologique de Oudhna loin de toutes les horreurs de la pollution ! Un lieu magique où la grandeur de l'histoire et la splendeur du présent s'imposent ! Merci aux responsables du site pour l'accueil chaleureux !"}
    
    ];

let data = [];
for (let i = 102; i < 112; i++) {
    let photo = {};
    if (i == 105 || i == 107) continue;
    photo["imgSrc"] = `https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/${i}.jpg?raw=true`
    data.unshift(photo);

}
let data2 = [];
let photo = {};
photo["imgSrc"] = `https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/322393260_711991923656141_2721274153146519510_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DT05G6ZwW5kAX-x3RLm&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAngQywmpJuAD40sJDcFiUeWVigDGw1ji0epZJ5GewjKg&oe=63CA8734`
data2.unshift(photo);
let photo2 = {};
photo2["imgSrc"] = `https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/322104636_666195185193698_3517632109569931361_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LIer5t4Vu0QAX8q-kzr&tn=P2wl8cil6FPw5PnX&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBJEAz32i6k1vT0X0gnJg_QO-FCcjIA855M-wEJYlPf0A&oe=63CA5C67`
data2.unshift(photo2);

let data3 = [];
let photo3 = {};
photo3["imgSrc"] = `https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/322394127_652256573363158_6178547277907372488_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sxrUCpkgZREAX9PYeYp&_nc_ht=scontent.ftun16-1.fna&oh=00_AfA6QqkpggUQtpJurkHZ6Z8P56tnf1IrCjbJa5U2bWxucQ&oe=63C9A05A`
data3.unshift(photo3);
let photo4 = {};
photo4["imgSrc"] = `https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/322386883_530844202310467_733237435365212102_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vZCnQZ6VgmwAX9yHzYB&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBXqmAt5iyawoHbnmEwyzpMxGdDKY5qDChW1TVya3fJXQ&oe=63CA7FCF`
data3.unshift(photo4);
let data4 = [];
let photo5 = {};
photo5["imgSrc"] = `https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/321962691_1319111608878923_2570470771033151085_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LsETElkuF1AAX8EzXRx&_nc_ht=scontent.ftun16-1.fna&oh=00_AfClX3ddeLwrdcizLAV_hHuYr_FyhDPHkASO_WB9w5tqQA&oe=63CAAC32`
data4.unshift(photo5);
let photo6 = {};
photo6["imgSrc"] = `https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/322727422_683301419930787_7747621629341037791_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-fTgxpTTOCcAX8eTrXK&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC98ZpG73QOo8-swCofAT-Wzg3CSp6HyldmppzAO3jasg&oe=63CAA508`

data4.unshift(photo6);
const ActivitesDetails6 = () => {
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
                                <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/Activités2">
                         <ArrowBackIcon   fontSize="large" /> <p>Return</p>


                   </NavLinksRoute>
                                <a href='https://fb.watch/i5m4NB-25Y/' target='_blank'>Video Live</a>

                            </Subtitle1>							
							</TextWrapper>
						</Column1>
						<Column2 >
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
        <InfoContainer lightBg={true} id={0}>
				<InfoWrapper>
					<InfoRow imgStart={true}>
						<Column1>
							<TextWrapper>
                            <Heading lightText={false}>
                                {cards[1].heading}
                            </Heading>
                            <Subtitle1 darkText={true}>
                                {cards[1].subtitle}
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
                                data2.map((item,index)=> {
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
        <InfoContainer lightBg={true} id={0}>
				<InfoWrapper>
					<InfoRow imgStart={true}>
						<Column1>
							<TextWrapper>
                            <Heading lightText={false}>
                                {cards[2].heading}
                            </Heading>
                            <Subtitle1 darkText={true}>
                                {cards[2].subtitle}
                                <br/>
                                <a href='https://fb.watch/i5n9Qm74y5/' target='_blank'>Video Live</a>
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
                                data3.map((item,index)=> {
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
        <InfoContainer lightBg={true} id={0}>
				<InfoWrapper>
					<InfoRow imgStart={true}>
						<Column1>
							<TextWrapper>
                            <Heading lightText={false}>
                                {cards[3].heading}
                            </Heading>
                            <Subtitle1 darkText={true}>
                                {cards[3].subtitle}
                                <br/>
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
                                data4.map((item,index)=> {
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

export default ActivitesDetails6;