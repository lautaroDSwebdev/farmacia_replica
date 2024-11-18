import { Asidefilter } from "../filter/Asidefilter";
import data from "./dermocosmetica.json";
import "./democosmetica.css";
import { useDispatch } from "react-redux";
import { addCartRedux } from "../../store/slice";
import {HelperFiltro} from "../filter/HelperFilter";
interface ProductDetails {
  id: number;
  marca: string;
  desc: string;
  stock: number;
  discountImg: string;
  discountPrice: string;
  img: string;
  precio: number;
}

const Dermocosmetica = () => {
  
  const prodsDermo = data.paginas.first
const {filterProducts} =  HelperFiltro()
const prodsFilter: ProductDetails[] = filterProducts(prodsDermo)
console.log(prodsFilter)


  const dispatch = useDispatch();
  return (
    <section className="flex dark:bg-dark-theme">
      <Asidefilter />
      <div className="p-[1rem] grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6 mx-auto w-[77%] ">
        {prodsFilter.map((e) => {
          return (
            <ul className="prods_style dark:bg-dark-theme " key={e.id}>
              <img className="h-auto w-[200px]" src={e.img} alt="" />
              <ul className="ul_marca_stock">
                <p className=" dark:text-white text-[12px] flex items-center ">{e.marca}</p>
                {
                  
                  e.stock > 1 ? (
                    <p className="text-[#66d151]">stock</p>
                  ) : (
                    <p className="text-[#f5493a] dark:text-[#ffffff] ">no stock</p>
                  )
                }
              </ul>
              <p className="text-[12px]">{e.desc}</p>
              <p className={`text-[15px] dark:text-white ${!e.discountPrice ? "pb-[3rem]" : ""}`}>
                $ {e.precio}
              </p>
              {e.discountPrice || e.discountImg ? (
                <p className="text-[#66d151] font-semibold text-[12px] flex items-center max-w-[100px] mx-auto ">
                  Con descuento de: $ {e.discountPrice}
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
