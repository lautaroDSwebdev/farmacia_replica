import { Link } from "react-router-dom";
import prod from '../../../mock/maquillaje.json'
// import "./style.css"
import { useDispatch } from "react-redux";
import { addCartRedux } from "../../../store/slice";
import { DataComponentFilter } from "../../filter/DataFilter";
import { ProductDetails } from "../../../types/types";
import { Asidefilter } from "../../filter/Asidefilter";
import { FaShoppingCart } from "react-icons/fa";
const Maquillaje = () => {

  const dispatch = useDispatch()

  const prodsFilter: ProductDetails[] = DataComponentFilter().filterProducts(prod);
  return (
    <section className="flex flex-col  md:flex-row md:items-start items-center  dark:bg-dark-theme">
      <Asidefilter />
      <div className="p-[1rem] grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-6 mx-auto w-[77%] ">
        {prodsFilter.map((e) => {
          return (
            <div key={e.id} className="div_prodCart dark:bg-dark-productstheme">
              <div className="g-div_imgProd ">
                <Link to={`/producto/${e.id}`}>
                  <img className="" src={e.img} alt={e.imgAlt} />
                </Link>
              </div>
              <div className="mx-3 p-3 h-auto">
                <ul className="ul_p ">
                  <p className={`g-p-stock ${e.stock > 0 ? "style_prods_Stock" : "style_prods_noStock"}`}
                  >
                    {e.stock === 0 ? "Agotado" : "Existe"}
                  </p>
                  <p className="g-brand ">{e.marca}</p>
                </ul>
                <p className="g-desc dark:text-white">{e.desc}</p>
              </div>
              <div className=" inline-flex ">
                <b className="g-price">${e.precio}</b>
              </div>

              <div className=" flex justify-center m-[1rem]">
                {e.stock >= 1 && (
                  <button

                    onClick={() =>
                      dispatch(addCartRedux({ title: e.marca, img: e.img, price: e.precio, id: e.id, desc: e.desc }))
                    }
                    className={`g-carrusel_btn  
                             ${e.stock > 0 ? "add_to_cart" : " cursor-auto"}`}
                  >

                    añadir al carrito
                    <FaShoppingCart />
                  </button>
                )}
                {e.stock < 1 && (
                  <button className={`g-carrusel_btn 
                                 ${e.stock < 0 ? "" : " cursor-auto"}`}
                  >
                    añadir al carrito
                    <FaShoppingCart />
                  </button>)
                }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Maquillaje   