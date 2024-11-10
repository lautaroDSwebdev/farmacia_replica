import { ProductDetails } from "../../../types/types";
import { delToCartRedux } from "../../../context/slice";
import { useDispatch } from "react-redux";

const ShowSelectedProd = ({
  selectorRedux,
}: {
  selectorRedux: ProductDetails[];
}) => {
  console.log(selectorRedux);

  const dispatch = useDispatch();

  return (
    <div
      className={` fixed flex flex-col top-1 right-4 w-80 min-h-full
                    h-fit  rounded-md bg-[#faf9f9] shadow-md shadow-slate-500 opacity-100 
                    z-[900] ${selectorRedux.length < 1 ? "bg-red-400" : "bg-[#7c81d4]"} `}
    >
      {selectorRedux.length < 1 && (
        <b className="flex justify-center text-[#464547] rounded-sm p-2 mx-auto">
          Carrito vacio
        </b>
      )}
      {selectorRedux.map((e) => (
        <ul
          className="flex justify-center text-center flex-col gap-3 top-[3rem] relative
                    bg-slate-200   text-white rounded-sm p-2 mx-auto"
          key={e.id}
        >
          <ul className="flex justify-center items-center gap-2">
            <p>{e.title}</p>
            <img className="h-auto w-[60px]" src={e.img} alt="" />
          </ul>
          <p>{e.price}</p>
          <p className="text-[#464547]  p-1 max-w-[10rem]">{e.desc}</p>
          <button
            onClick={() => dispatch(delToCartRedux({ id: e.id }))}
            className="text-red-600"
          >
            Eliminar{" "}
          </button>
        </ul>
      ))}

      <button>Finalizar compra</button>
      <button>Ver compra</button>
    </div>
  );
};
export default ShowSelectedProd;
