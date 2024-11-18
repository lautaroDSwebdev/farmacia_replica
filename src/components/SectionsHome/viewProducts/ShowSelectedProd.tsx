import { ProductDetails } from "../../../types/types";
import { delToCartRedux } from "../../../store/slice";
import { useDispatch } from "react-redux";
import "./showProds.css";
const ShowSelectedProd = ({
  selectorRedux,
}: {
  selectorRedux: ProductDetails[];
}) => {
  selectorRedux;

  console.log(selectorRedux);

  const dispatch = useDispatch();
// sumarTotal
  return (
    <div className={`div_showSelectedProds shadow-md shadow-slate-500  `}>
      {selectorRedux.length < 1 && <b className="empty_cart">Carrito vacio</b>}
      {selectorRedux.map((e) => (
        <ul
          className={`ul_showselectedProds ${selectorRedux.length > 0 && "prods_separate"}`}
          key={e.id}
        >
          <ul>
            <p>{e.title}</p>
            <img src={e.img} alt="" />
            <b>{e.price}</b>
            <button
              onClick={() => dispatch(delToCartRedux({ id: e.id }))}
              className="text-red-600"
            >
              Eliminar
            </button>
          </ul>
        </ul>
      ))}
     
      {selectorRedux.length > 0 && (
        <div className="end_buy">
          <button>Finalizar compra</button>
          <button>Ver compra</button>
        </div>
      )}
    </div>
  );
};
export default ShowSelectedProd;
