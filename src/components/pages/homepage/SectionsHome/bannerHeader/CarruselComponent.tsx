// import Slider from "react-slick";
import data from '../../../../../mock/data.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {  useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
const { BannerImgDesk , BannerImgMob}  = data.entireHome
// const carruselMarcas = data.entireHome.CarruselMarcas

const CarruselComponent = () => {
    let value
    clearInterval(value)

    // const [count, setCount] = useState(0)

    // const Autoplay = () => { 
    //     // si el contador es menor a el ultimo indice del array
    //     if(count < BannerImgDesk.length -1){
    //       setCount(count +1)
    //       }else{
    //         setCount(0)
    //       }
    //     if(count < BannerImgMob.length -1){
    //       setCount(count +1)
    //       }else{
    //         setCount(0)
    //       }
    //     }
    
        // useEffect(()=> {
        //     value = setTimeout(Autoplay, 5000)
        // },[count])

   
  return (
    <div>
            <Link  to={BannerImgDesk[0].link}>
                <div className='image-bg hidden md:block'  key={BannerImgDesk[0].id} style={{backgroundImage: `url(${BannerImgDesk[0].img})`}}>  </div>
                <div className='image-mob block md:hidden'  key={BannerImgMob[0].id} style={{backgroundImage: `url(${BannerImgMob[0].imgMobile})`}}>  </div>
            </Link>
        </div>
  )
}

export default CarruselComponent