import {React,useState} from 'react'
import  './Pictures.css'

import CloseIcon from '@mui/icons-material/Close';
const Pictures1 = () => {
    //storing pictures 
    let data=[
        
        {
            imgSrc:"https://github.com/khalil-ryu/cspdd-images/blob/master/101.jpg?raw=true"
        }, 
        {
            imgSrc:"https://github.com/khalil-ryu/cspdd-images/blob/master/102.jpg?raw=true"
        }, 
        {
            imgSrc:"https://github.com/khalil-ryu/cspdd-images/blob/master/103.jpg?raw=true"
        }, 
        {
            imgSrc:"https://github.com/khalil-ryu/cspdd-images/blob/master/104.jpg?raw=true"
        }, 
        {
            imgSrc:"https://github.com/khalil-ryu/cspdd-images/blob/master/105.jpg?raw=true"
        },
        {
            imgSrc:"https://github.com/khalil-ryu/cspdd-images/blob/master/106.jpg?raw=true"
        },  
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
  
  export default Pictures1