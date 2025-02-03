
import { Link } from 'react-router-dom'
import data from '../../../../../mock/data.json'
import "./style.css"

const news = data.entireHome.CarruselBBcreams
const NewsComp = () => {
    return (
        <>
            <article className="w-full">
                <div className=" flex md:flex-row flex-col p-3  md:justify-between items-center justify-center max-w-maximo-ancho mt-[3rem] mb-[1rem] mx-auto">
                    <p className="  g-red g-sideleft-titles  dark:text-white flex justify-center md:justify-start ">Novedades</p>
                    <button className=" text-[#000000] dark:bg-dark_theme_details read_more  py-[1rem] px-[2rem] g-button_seemore">Ver mas +</button>
                </div>
            </article>

            <section className=" grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] justify-center gap-14 max-w-maximo-ancho mx-auto mb-[15vh] ">
                {
                    news.map((e) => {
                        return (
                            <article className="dark:bg-dark-productstheme flex mx-auto p-3  flex-col  justify-center  border border-[#e2e1e1] rounded-md " key={e.id}>
                                <Link to={``}>
                                    <div className="flex justify-center "
                                        style={{
                                            backgroundImage: `url(${e.img})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat", height: "16vh"
                                        }}>
                                    </div>
                                </Link>
                                <div className="mx-[2rem] my-[1rem]">
                                    <p className="p_title dark:text-white">{e.title}</p>
                                </div>
                                <div className='div_readmore'>
                                    <p className="p_readmore g-red">{e.read_more}</p>
                                </div>
                                <div className=" borde-desc-caras">
                                    <p className="p_date">{e.date}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}

export default NewsComp