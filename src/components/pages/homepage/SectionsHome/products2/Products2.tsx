import data from "../../../../../mock/storeData.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addCartRedux } from "../../../../../store/slice";
import "./style.css"
import { settings as SettingsCarrusel } from "../../../../../mock/SettingsCarrusel";
import { FaShoppingCart } from "react-icons/fa";


const prods = data.store.prods2
const Products2 = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <article className="w-full">
                <div className="max-w-maximo-ancho mx-auto mt-[3rem] mb-[1rem] flex md:flex-row flex-col p-3  items-center md:justify-between justify-center ">
                    <p className=" text-[#F75A3C] g-sideleft-titles dark:text-white flex justify-center md:justify-start">Mas Vendidos</p>
                    <button className="read_more dark:bg-dark_theme_details g-button_seemore">Ver mas +</button>
                </div>
                <ul className="max-w-maximo-ancho mx-auto g-padding-carrusel">
                    <Slider {...SettingsCarrusel} >
                        {
                            prods.map((e) => {
                                return (
                                    <div key={e.id} className="dark:bg-dark-productstheme prod_styles">
                                        <div className="g-div_imgProd">
                                            <img className="" src={e.img} />
                                        </div>
                                        <div className="mx-3 p-3 h-auto">
                                            <ul className="flex gap-4">
                                                <p className={`g-p-stock 
                                                    ${e.stock > 0 ?
                                                        "style_prods_Stock" : "style_prods_noStock"}`}
                                                >
                                                    {e.stock === 0 ? "Agotado" : "Existe"}
                                                </p>
                                                <p className="g-brand ">{e.title}</p>
                                            </ul>
                                            <p className="g-desc dark:text-white">{e.description}</p>
                                        </div>
                                        <div className=" inline-flex ">
                                            <b className="g-price">${e.price}</b>
                                        </div>

                                        <div className=" flex justify-center m-[1rem]">
                                            {
                                                e.stock >= 1 &&
                                                <button
                                                    onClick={() =>
                                                        dispatch(addCartRedux({
                                                            title: e.title,
                                                            img: e.img,
                                                            prive: e.price,
                                                            id: e.id,
                                                            desc: e.description
                                                        }))}
                                                    className={`g-carrusel_btn   ${e.stock > 0 ? "add_to_cart" : " cursor-auto"}`}>
                                                    {e.add_kart}
                                                    <FaShoppingCart />
                                                </button>
                                            }
                                            {
                                                e.stock < 1 &&
                                                <button disabled
                                                    className={`g-carrusel_btn   ${e.stock > 0 ? "add_to_cart" : " cursor-auto"}`}>
                                                    {e.add_kart}
                                                    <FaShoppingCart />
                                                </button>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </ul>
            </article>
        </div>
    )
}

export default Products2