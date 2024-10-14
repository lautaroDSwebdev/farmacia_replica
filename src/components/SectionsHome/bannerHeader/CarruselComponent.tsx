import Slider from "react-slick";
import data from '../../../mock/data.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = data.entireHome.CarruselBannerImagenes
const carruselMarcas = data.entireHome.CarruselMarcas

const CarruselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 10000,
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

            <Slider {...settings}  >
                {
                    banners.map((banner) => (
                        <div key={banner.id} className='pt-[3rem] '>
                            <img src={banner.img} alt={banner.alt} />
                        </div>
                    ))
                }
            </Slider>

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