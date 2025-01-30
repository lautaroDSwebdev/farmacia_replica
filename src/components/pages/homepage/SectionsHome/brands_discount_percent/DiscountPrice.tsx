import data from'../../../../../mock/data.json'


const discount = data.entireHome.CarruselDescuentos

const DiscountPrice = () => {
    return (
            <article className="pt-[3rem] w-full my-3 flex flex-wrap
                justify-center gap-4 max-w-maximo-ancho mx-auto dark:bg-dark-theme">
                {
                    discount.map(e => {
                        return (
                        <div className=" flex justify-evenly max-w-maximo-ancho mx-auto" key={e.id}>
                            <b className=" cursor-pointer p-3 rounded-[3rem] transition-all 1s hover:bg-red-400
                                bg-red-600 dark:bg-dark_theme_details   text-white text-[1.5rem] font-semibold" >{e.descuento}</b>
                        </div>
                        )
                    })
                }
            </article>
    )
}

export default DiscountPrice