import data from "../../../../../storeData.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addCartRedux } from "../../../../../store/slice";
import "./style.css"


const prods = data.store.prods2
const Products2 = () => {
    const settingsbrands = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const dispatch = useDispatch()

    return (
        <div>
            <article className="w-full">
                <div className="max-w-maximo-ancho mx-auto mt-[3rem] mb-[1rem] flex justify-between ">
                    <b className=" text-[#F75A3C] text-[2rem] dark:text-white">Mas Vendidos</b>
                    <button className="read_more dark:bg-dark_theme_details">Ver mas +</button>
                </div>

                <ul className="max-w-maximo-ancho mx-auto ">

                    <Slider {...settingsbrands} >

                        {
                            prods.map((e) => {
                                return (
                                    <div key={e.id} className="dark:bg-dark-theme prod_styles">
                                        <div className="div_child_styles">
                                            <img className="" src={e.img} />
                                        </div>
                                        <div className="mx-3 p-3 h-auto">
                                            <ul className="flex gap-4">
                                                <p className={`px-2 py-1 inline-flex rounded-[3rem] text-sm bg-[#F5F5F5] cursor-pointer 
                                                    ${e.stock > 0 ?
                                                        "style_prods_Stock" : "style_prods_noStock"}`}
                                                >
                                                    {e.stock === 0 ? "Agotado" : "En stock"}
                                                </p>
                                                <p className="px-2 py-1 inline-flex rounded-[3rem] text-sm bg-[#F5F5F5] cursor-pointer">{e.title}</p>
                                            </ul>
                                            <p className="p-1">{e.description}</p>
                                        </div>
                                        <div className=" inline-flex ">
                                            <b className="pl-4">{e.price}</b>
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
                                                </button>
                                            }
                                            {
                                                e.stock < 1 &&
                                                <button disabled
                                                    className={`g-carrusel_btn   ${e.stock > 0 ? "add_to_cart" : " cursor-auto"}`}>
                                                    {e.add_kart}
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