import Slider from "react-slick";
import data from '../../../mock/data.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const banners = data.entireHome.CarruselBannerImagenes
const carruselMarcas = data.entireHome.CarruselMarcas

const CarruselComponent = () => {
    let value
    clearInterval(value)
    const [count, setCount] = useState(0)

    const Autoplay = () => { 
        // si el contador es menor a el ultimo indice del array
        if(count < banners.length -1){
          setCount(count +1)
          }else{
            setCount(0)
          }
        }
    
        useEffect(()=> {
            value = setTimeout(Autoplay, 3500)
        },[count])
    


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 3000,
        // autoplaySpeed: 10000,
        cssEase: "linear"
      };
      const settingsbrands = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <div>

            <Link  to={banners[count].link}>
                <div key={banners[count].id} className='pt-[3rem]  '>
                    <img src={banners[count].img} alt={banners[count].alt} />
                </div>
            </Link>

            <Slider {...settingsbrands} >
                {
                    carruselMarcas.map((brand) => (
                        <div key={brand.id} className='pt-[3rem]'>
                            <img className="max-h-[30px]" src={brand.img} alt={brand.url} />
                        </div>
                    ))
                }
            </Slider>
            

        </div>
  )
}

export default CarruselComponent