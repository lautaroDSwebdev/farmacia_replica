import { useParams } from "react-router-dom";
import data from "../../../mock/dermocosmetica.json";
import "./style.css";
import { MdShoppingCart } from "react-icons/md";
import { addCartRedux } from "../../../store/index";
import { useDispatch } from "react-redux";
const SelectedImgProd = () => {
  const prodData = data.paginas.first;
  const { id } = useParams();
  console.log("este es el id del producto seleccionado");
  console.log(id);

  const ViewProduct = (id: number) => {
    return prodData.filter((prod) => prod.id == id);
  };

  const prodChosse = ViewProduct(Number(id));
  console.log("Y esto es lo que devuelve el filtro");
  console.log(prodChosse.map((prod) => prod));
  const dispatch = useDispatch();
  return (
    <section className="section_prodSelect ">
      {prodChosse.map((e) => (
        <div className="div_prod" key={e.id}>
          <div className="div_img">
            <img src={e.img} alt="" />
          </div>
          <div className="div_description">
            <div className="div_marcaStock">
              <p className="marca">{e.marca}</p>
              <p className="stock">Stock: {e.stock}</p>
            </div>
            <p className="desc">{e.desc}</p>
            <p className="price">${e.precio}</p>

            <div className="div_price">
              <input className="input_number" type="number" />
              <button
                onClick={() =>
                  dispatch(
                    addCartRedux({
                      marca: e.marca,
                      img: e.img,
                      precio: e.precio,
                      id: e.id,
                      desc: e.desc,
                    })
                  )
                }
                className="flex items-center gap-3"
              >
                Comprar <MdShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SelectedImgProd;
