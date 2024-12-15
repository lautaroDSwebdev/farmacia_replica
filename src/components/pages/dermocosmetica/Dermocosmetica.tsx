import { Asidefilter } from "../../filter/Asidefilter";
import data from "./dermocosmetica.json";
import "./democosmetica.css";
import { useDispatch } from "react-redux";
import { HelperFiltro } from "../../filter/HelperFilter";
import { Link } from "react-router-dom";
import { ProductDetails } from "../../../types/types";
import { addCartRedux } from "../../../store";

const Dermocosmetica = () => {
  const prodsDermo = data.paginas.first;
  const prodsFilter: ProductDetails[] = HelperFiltro().filterProducts(prodsDermo) 
  console.log(prodsFilter);

  const dispatch = useDispatch();

  return (
    <section className="flex dark:bg-dark-theme">
      <Asidefilter />
      <div className="p-[1rem] grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6 mx-auto w-[77%] ">
        {prodsFilter.map((e) => {
          return (
            <ul className="prods_style dark:bg-dark-theme " key={e.id}>
              <Link to={`/producto/${e.id}`}>
                <img className="h-auto w-[200px]" src={e.img} alt={e.imgAlt} />
              </Link>
              <ul className="ul_marca_stock">
                <p className=" dark:text-white text-[12px] flex items-center ">
                  {e.marca}
                </p>
                {e.stock > 1 ? (
                  <p className="text-[#66d151]">stock</p>
                ) : (
                  <p className="text-[#f5493a] dark:text-[#ffffff] ">
                    no stock
                  </p>
                )}
              </ul>
              <p className="text-[12px]">{e.desc}</p>
              <p
                className={`text-[15px] dark:text-white ${!e.discountPrice?.toString() ? "pb-[3rem]" : ""}`}
              >
                $ {e.precio}
              </p>
              {e.discountPrice  || e.discountImg ? (
                <p className="text-[#66d151] font-semibold text-[12px] flex items-center max-w-[100px] mx-auto ">
                  Con descuento de: $ {e.discountPrice?.toString() }
                </p>
              ) : (
                ""
              )}
              <button
                onClick={() =>
                  dispatch(
                    addCartRedux({
                      id: e.id,
                      img: e.img,
                      title: e.marca,
                      price: e.precio,
                    })
                  )
                }
              >
                agregar al carrito
              </button>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default Dermocosmetica;
