import data from'../../../mock/data.json'


const discount = data.entireHome.CarruselDescuentos

const DiscountPrice = () => {
    return (

            <article className="pt-[3rem] w-full my-3 flex flex-wrap
                justify-center gap-4 max-w-maximo-ancho mx-auto">
                {
                    discount.map(e => {
                        return (
                        <div className=" flex justify-evenly max-w-maximo-ancho mx-auto" key={e.id}>
                            <a className=" p-3 rounded-[3rem] transition-all 1s hover:bg-red-400
                                bg-red-600  text-white text-[1.5rem] font-semibold" href="">{e.descuento}</a>
                        </div>
                        )
                    })
                }
            </article>
    )
}

export default DiscountPrice