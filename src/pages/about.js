import React,  {useState} from 'react';
import { render } from 'react-dom';
import ResponsiveGallery from 'react-responsive-gallery';
import { FacebookPlayer } from "reactjs-media";
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import Footer	 from '../Components/Footer/index';
import photos from '../images/galeries/galImages';

import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';

// const images = [
//   {
//     original: 'C:/Users/Administrateur.PC-LBENMAAOUI/Documents/CSPDD-SITE/cspdd/src/images/galeries/1.jpg',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//   },
// ]

const MyGallery = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
		setIsOpen(!isOpen);
	};
  return(
    <>
    <Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
    <div className='container'>
   
    <ImageGallery items={photos} />
    {/* <ResponsiveGallery 
      useLightBox= {true}
      numOfImagesPerRow ={{xs: 1,s: 2,m: 2,l: 2,xl: 2 ,xxl:2}}
      imageMaxWidth = {{xs: 100,s: 100,m: 100,l: 100,xl: 50,xxl:50}}
      images={photos}/> */}
       <FacebookPlayer
                src="https://fb.watch/5ingrt6tlh/"
                
                primaryColor="red"
                width={650}
                height={600}
                // other props
            />
    
    <FacebookPlayer
                src="https://fb.watch/5ioVoogrfu/"
                
                primaryColor="red"
                width={650}
                height={600}
                // other props
            />
    </div>
    <Footer/>

    </>
  ) 
}




export default MyGallery;

