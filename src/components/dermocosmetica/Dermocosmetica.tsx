import data from "./dermocosmetica.json";
import "./style.css";

const prodsDermo = data.paginas[1];
const Dermocosmetica = () => {
  return (
    <div className="pt-[6rem] grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2 mx-auto w-full max-w-maximo-ancho">
      {prodsDermo.map((e) => {
        return (
          <ul
            className="flex flex-col justify-center hover:z-[100] p-3 bg-white
                rounded-md cursor-pointer hover:scale-110 transition-all
                ease-in-out .3s shadow shadow-slate-400"
            key={e.id}
          >
            <p className="text-center">{e.marca}</p>
            <img className="h-auto w-[200px]" src={e.img} alt="" />
            <p className={`text-center ${!e.discountPrice ? "pb-[3rem]" : ""}`}>
              {e.precio}
            </p>
            {e.discountPrice || e.discountImg ? (
              <p className="text-[#6cec52] text-center">
                Con descuento de{e.discountPrice}
              </p>
            ) : (
              ""
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default Dermocosmetica;
