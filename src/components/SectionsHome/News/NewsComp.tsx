
import { Link } from 'react-router-dom'
import data from '../../../mock/data.json'


const news = data.entireHome.CarruselBBcreams
const NewsComp = () => {
  return (
    <>
    <article className="w-full">
            <div className=" flex justify-between max-w-maximo-ancho mt-[3rem] mb-[1rem] mx-auto">
                <b className=" ml-24 text-[#F75A3C] text-[2rem] dark:text-white ">Novedades</b>
                <button className=" text-[#000000] dark:bg-dark_theme_details read_more  py-[1rem] px-[2rem]">Ver mas +</button>
            </div>
        </article>

        <section className=" grid grid-cols-4 gap-14 max-w-maximo-ancho mx-auto mb-[15vh] ">
            {
                news.map((e) => {
                    return (
                        <article className="dark:bg-dark-theme flex mx-auto  flex-col  justify-center  border border-[#e2e1e1] rounded-md " key={e.id}>
                            <Link to={``}>
                                <div className="flex justify-center " 
                                    style={{backgroundImage: `url(${e.img})`,
                                    backgroundSize: "cover", 
                                    backgroundRepeat: "no-repeat", height: "16vh"  }}>
                                </div>
                            </Link>
                            <div className="mx-[2rem] my-[1rem]">
                                <p className="text-lg">{e.title}</p>
                            </div>
                            <div>
                                <p className="mx-[2rem] my-[2rem] font-bold  uppercase text-[#F75A3C] ">{e.read_more}</p>
                            </div>
                            <div className=" borde-desc-caras">
                                <p className="mx-[2rem] my-[1rem]">{e.date}</p>
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