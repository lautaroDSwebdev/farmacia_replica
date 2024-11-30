import { useDispatch } from "react-redux";
import "./Prods.css";
import { TypesCart } from "../../../../../types/types";
import { addCartRedux } from "../../../../../store/index";
import { Link } from "react-router-dom";

const Prods = ({id, stock, title, img, addkart, desc,
  price,
  imgAlt,
}: TypesCart) => {

  const dispatch = useDispatch();
  
  return (
    <div key={id} className="div_prodCart dark:bg-dark-theme">
      <div className="div_imgProd ">
        <Link to={`/producto/${id}`}>
          <img className="" src={img} alt={imgAlt} />
        </Link>
      </div>
      <div className="mx-3 p-3 h-auto">
        <ul className="ul_p ">
          <p
            className={`ul_p-styles ${stock > 0 ? "style_prods_Stock" : "style_prods_noStock"}`}
          >
            {stock === 0 ? "Agotado" : "En stock"}
          </p>
          <p className="ul_p-title">{title}</p>
        </ul>
        <p className="p-1">{desc}</p>
      </div>
      <div className=" inline-flex ">
        <b className="pl-4">{price}</b>
      </div>
      {/* Si el carrito está vacio y es menor a logitud 1 que el boton no desaparezca pero no cumpla ninguna funcion */}
      <div className=" flex justify-center m-[1rem]">
        {stock > 1 ? (
          <button
            onClick={() =>
              dispatch(addCartRedux({ title, img, price, id, desc }))
            }
            className={`p-[.4rem] bg-[#F5F5F5] w-full rounded-[3rem] 
        ${stock > 0 ? "add_to_cart" : " cursor-auto"}`}
          >
            {addkart}
          </button>
        ) : (
          <button
            className={`p-[.4rem] bg-[#F5F5F5] w-full rounded-[3rem] 
        ${stock > 0 ? "add_to_cart" : " cursor-auto"}`}
          >
            {addkart}
          </button>
        )}
      </div>
    </div>
  );
};

export default Prods;
