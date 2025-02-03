import { ProductsSelected } from "../../../../../types/types";
import { delToCartRedux } from "../../../../../store/index";
import { useDispatch } from "react-redux";
import "./showProds.css";
import { IoCloseCircleOutline } from "react-icons/io5";
const ShowSelectedProd = ({ selectorRedux, view_cart, setEstado }: {
  selectorRedux: ProductsSelected[],
  view_cart: boolean,
  setEstado: any
}) => {
  selectorRedux;

  const longitudBolsa = selectorRedux.length


  const dispatch = useDispatch();
  return (
    <section className={` `}>
      <div className="div_showSelectedProds dark:bg-dark-productstheme shadow-md shadow-slate-500">

        {/* close button */}
        <ul className="flex gap-3 justify-between">
          <div></div>
          <button className="hover:text-[#f74343] p-2"
            onClick={() => setEstado(!view_cart)}>
            <IoCloseCircleOutline className="text-[23px] " />
          </button>
        </ul>

        {selectorRedux.length < 1 &&
          <div className="empty_cart">
            <b className="">Carrito vacio</b>
          </div>
        }
        {/* list of products */}
        <div className="scroll_styles">
          {selectorRedux.map((e) => (
            <ul
              className={`ul_showselectedProds  ${selectorRedux.length > 0 && "prods_separate"}`}
              key={e.id}
            >
              <div className="div_prods">
                <img src={e.img} alt="imagen producto" />
                <div className="div_title_price">
                  <h3 className="g-red">{e.title}</h3>
                  <p className="" > ${e.price}</p>
                </div>

                <div className="btn-del">
                  <button
                    onClick={() => dispatch(delToCartRedux({ id: e.id }))}
                    className="text-red-600"
                  >
                    <IoCloseCircleOutline className="text-[15px] " />
                  </button>
                </div>

              </div>

            </ul>
          ))}
        </div>
        <div>
          {
            selectorRedux.map(e => {
              return (

                <p>Total: {e.price * longitudBolsa} </p>
              )
            })

          }

        </div>
        <div className="end_buy">
          <button>Finalizar compra</button>
          <button>Ver compra</button>
        </div>

      </div>
    </section>
  );
};
export default ShowSelectedProd;
