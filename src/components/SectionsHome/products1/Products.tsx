import data from "../../../store.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const prods = data.store.prods2
const Products = () => {
    const settingsbrands = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return (
        <div>
            <article className="w-full">
                <div className="max-w-maximo-ancho mx-auto mt-[3rem] mb-[1rem] flex justify-between ">
                    <b className="  text-[#F75A3C] text-[2rem]">Productos Destacados</b>
                    <button className="read_more ">Ver mas +</button>
                </div>
                {/* <section className=" grid grid-cols-4 gap-[2rem] max-w-maximo-ancho mx-auto ">
                    </section> */}
                    <ul className="max-w-[1200px] mx-auto ">
                    <Slider {...settingsbrands} >
                            {
                                prods.map((e) => {
                                    return (
                                    <div key={e.id} className=" flex mx-auto   flex-col  justify-center  border border-[#eeeded] rounded-md">
                                        <div className="flex justify-center overflow-hidden">
                                            <img className="h-[11rem] w-[14rem] cursor-pointer opacity-60 hover:rotate-2
                                            hover:opacity-100 hover:scale-125  transition-all duration-500 ease-out" src={e.img}/>
                                        </div>
                                        <div className="mx-3 p-3 h-auto">
                                            <ul className="flex gap-4">
                                                    <p className={`px-2 py-1 inline-flex rounded-[3rem] text-sm bg-[#F5F5F5] cursor-pointer 
                                                    ${e.stock > 0 ? 
                                                        "style_prods_Stock": "style_prods_noStock" }`}
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
                                            <button className={`p-[.4rem] bg-[#F5F5F5] w-full rounded-[3rem] 
                                            ${e.stock  > 0 ? "add_to_cart" 
                                            : " cursor-auto"}`}>{e.add_kart}</button>
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

export default Products