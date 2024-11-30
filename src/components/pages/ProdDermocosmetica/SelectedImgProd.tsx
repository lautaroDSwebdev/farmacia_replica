import { useParams } from "react-router-dom";
import data from "../dermocosmetica/dermocosmetica.json";


const SelectedImgProd = () => {
  const prodData = data.paginas.first;
  const { id } = useParams();
  console.log("este es el id del producto seleccionado");
  console.log(id);

  const ViewProduct = (id: number) => {
    return prodData.filter((prod) => prod.id == id);
  };

  const prodChosse= ViewProduct(Number(id));
  console.log("Y esto es lo que devuelve el filtro")
  console.log(prodChosse.map(prod => prod));
  return (
    <div>
      {
        prodChosse.map(e => (
          <div key={e.id}>
            <p>{e.marca}</p>
            <p>{e.desc}</p>
            <p>{e.precio}</p>
            <img src={e.img} alt="" />
          </div>
        ))
      }
    </div>
  );
};

export default SelectedImgProd;
