import { useDispatch } from 'react-redux'
import { addCartRedux } from '../../../context/slice'

const Prods = ({id, stock,title,img ,addkart, desc, price}) => {

    const dispatch = useDispatch()
  return (
    <div key={id} className=" flex mx-auto   flex-col  justify-center  border border-[#eeeded] rounded-md">
    <div className="flex justify-center overflow-hidden">
        <img className="h-[11rem] w-[14rem] cursor-pointer opacity-60 hover:rotate-2
        hover:opacity-100 hover:scale-125  transition-all duration-500 ease-out" src={img}/>
    </div>
    <div className="mx-3 p-3 h-auto">
        <ul className="flex gap-4">
                <p className={`px-2 py-1 inline-flex rounded-[3rem] text-sm bg-[#F5F5F5] cursor-pointer 
                ${stock > 0 ? 
                    "style_prods_Stock": "style_prods_noStock" }`}
                    >
                    {stock === 0 ? "Agotado" : "En stock"}
                </p>
                <p className="px-2 py-1 inline-flex rounded-[3rem] text-sm bg-[#F5F5F5] cursor-pointer">{title}</p>
            </ul>
        <p className="p-1">{desc}</p>
    </div>
    <div className=" inline-flex ">
        <b className="pl-4">{price}</b>
    </div>
    {/* Si el carrito está vacio y es menor a logitud 1 que el boton no desaparezca pero no cumpla ninguna funcion */}
    <div className=" flex justify-center m-[1rem]">
        { stock > 1 ?
        <button  onClick={()=> dispatch( addCartRedux({ title, img, price, id, desc}) )} className={`p-[.4rem] bg-[#F5F5F5] w-full rounded-[3rem] 
        ${stock  > 0 ? "add_to_cart" 
        : " cursor-auto"}`}>{addkart}</button>
        : 
        <button  className={`p-[.4rem] bg-[#F5F5F5] w-full rounded-[3rem] 
        ${stock  > 0 ? "add_to_cart" 
        : " cursor-auto"}`}>{addkart}</button>
        }
    </div>
</div>
  )
}

export default Prods