import {React,useState} from 'react'
import  './Pictures.css'
import carre1 from '../images/carre1.png'
import x from '../images/1.jpeg'
import xx from '../images/2.jpg'
import xxx from '../images/3.jpeg'
import xxxx from '../images/4.webp'
import xxxxx from '../images/5.webp'
import laptop from '../images/laptop.jpg'
import CloseIcon from '@mui/icons-material/Close';
const Pictures2 = () => {
    //storing pictures 
    let data=[
        {
            imgSrc:x
        },  
        {
            imgSrc:carre1
        },  
        {
            imgSrc:xx
        }, 
        {
            imgSrc:x
        },
        {
            imgSrc:xxx
        },
        {
            imgSrc:xxxx
        },
        {
            imgSrc:xxxxx
        },
        {
            imgSrc:laptop
        }
    ]
    const [model,setModel]=useState(false)
    const [tempimgSrc,setTempimgSrc]=useState('')
    const getImg =(imgSrc)=>{
        setTempimgSrc(imgSrc);
        setModel(true);
    }
    return ( 
        <>
        <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} />
            <CloseIcon onClick={()=> setModel(false)}/>
        </div>
  <div className='gallery'>
    {
        
        data.map((item,index)=> {
            return(
                <div className='pics' key={index} onClick={()=> getImg(item.imgSrc )}>
                    <img src={item.imgSrc} style={{width:'100%'}}></img>
                </div>
            )
        })
    }

  </div>
  </>  )
  };
  
  export default Pictures2