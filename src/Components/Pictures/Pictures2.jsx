import {React,useState} from 'react'
import  './Pictures.css'

import CloseIcon from '@mui/icons-material/Close';
const Pictures2 = () => {
    //storing pictures 
    let data=[
    ]

    for (let i = 1; i < 119; i++) {
        let photo = {};
        photo["imgSrc"] = `https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/${i}.jpg?raw=true`
        data.unshift(photo);
    }
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