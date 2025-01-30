import data from "../../../../../storeData.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Prods from "./Prods";
import { settings as SettingsCarrusel } from "../../../../../mock/SettingsCarrusel";


const prods = data.store.prods1
const Products = () => {
    return (
        <div>
            <article className="w-full">
                <div className="max-w-maximo-ancho mx-auto mt-[3rem] mb-[1rem] flex justify-between ">
                    <b className="  text-[#F75A3C] text-[2rem] dark:text-white">Productos Destacados</b>
                    <button className="read_more dark:bg-dark_theme_details enlace-header ">Ver mas +</button>
                </div>
                <ul className="max-w-[1200px] mx-auto g-padding-carrusel">
                    <Slider {...SettingsCarrusel}  >
                        {
                            prods.map((e) => {
                                return (
                                    <Prods
                                        key={e.id}
                                        id={e.id}
                                        stock={e.stock}
                                        title={e.title}
                                        img={e.img}
                                        imgAlt={e.imgAlt}
                                        price={e.price}
                                        addkart={e.add_kart}
                                        desc={e.description}
                                    />
                                )
                            })
                        }
                    </Slider>
                </ul>
            </article>
        </div>
    )
}

export default Products