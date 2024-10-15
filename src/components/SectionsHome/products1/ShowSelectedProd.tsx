import { useState } from "react";
import { ProductDetails } from "../../../types/types";
import { delToCartRedux } from "../../../context/slice";
import { useDispatch } from "react-redux";

const ViewProducts = ({selectorRedux, setopenModal, openModal } ) => { 
    
   
    const dataProd = selectorRedux as ProductDetails[]

    console.log(selectorRedux) 

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()

    return(

        <div className={` fixed flex flex-col top-1 right-4 w-80 min-h-[20vh] 
                    h-fit place-content-center rounded-md bg-[#dfd9d9] opacity-100   z-[900] ${dataProd.length < 1 ? "bg-red-400": "bg-[#7c81d4]"} `}>
            <button>Cerrar</button> 
            {
                dataProd.length < 1 && <b className="flex justify-center  text-white rounded-sm p-2 mx-auto">Carrito vacio</b>
            }
            {
                dataProd.map(e => (
                    <ul className="flex justify-center text-center flex-col gap-3  border-zinc-500 border   text-white rounded-sm p-2 mx-auto" key={e.id}>
                        <ul className="flex justify-center items-center gap-2">

                            <p>{e.title}</p>
                            <img className="h-auto w-[60px]" src={e.img} alt="" />
                        </ul>
                        <p>{e.price}</p>
                        <p className="text-[#d8d7dc]  p-1 max-w-[10rem]">{e.desc}</p>
                        
                        <button onClick={()=> dispatch( delToCartRedux({id: e.id})) } className="text-red-600">Eliminar </button>
                    </ul>
                ))
            }
           
            <button>Finalizar compra</button>
            <button>Ver compra</button>
      </div>
    )
 }
 export default ViewProducts