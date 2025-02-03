import { useDispatch } from "react-redux";
import "./Prods.css";
import { TypesCart } from "../../../../../types/types";
import { addCartRedux } from "../../../../../store/index";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Prods = (
  { id,
    stock,
    title,
    img,
    addkart,
    desc,
    price,
    imgAlt,
  }: TypesCart) => {

  const dispatch = useDispatch();

  return (
    <div key={id} className="div_prodCart dark:bg-dark-productstheme">
      <div className="g-div_imgProd ">
        <Link to={`/producto/${id}`}>
          <img className="" src={img} alt={imgAlt} />
        </Link>
      </div>
      <div className="mx-3 p-3 h-auto">
        <ul className="ul_p ">
          <p className={`g-p-stock ${stock > 0 ? "style_prods_Stock" : "style_prods_noStock"}`}
          >
            {stock === 0 ? "Agotado" : "Existe"}
          </p>
          <p className="g-brand ">{title}</p>
        </ul>
        <p className="g-desc dark:text-white">{desc}</p>
      </div>
      <div className=" inline-flex ">
        <b className="g-price">${price}</b>
      </div>
     
      <div className=" flex justify-center m-[1rem]">
        {stock >= 1 && (
          <button

            onClick={() =>
              dispatch(addCartRedux({ title, img, price, id, desc }))
            }
            className={`g-carrusel_btn  
        ${stock > 0 ? "add_to_cart" : " cursor-auto"}`}
          >
            
            {addkart}
            <FaShoppingCart/>
          </button>
        )}
        {stock < 1 && (
          <button className={`g-carrusel_btn 
            ${stock < 0 ? "" : " cursor-auto"}`}
            >
            {addkart}
            <FaShoppingCart/>
          </button>)
        }
      </div>
    </div>
  );
};

export default Prods;
