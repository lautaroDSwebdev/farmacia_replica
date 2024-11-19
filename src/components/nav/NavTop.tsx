import { Link } from "react-router-dom";
import data from "../../mock/data.json";
import CartIcon from "./CartIcon";
import DarkLight from "./DarkLight";
export const NavTop = () => {
  const imagenLogo = data.entireHome.logoPagina;
  return (
    <ul className="borde_nav p-1 dark:bg-dark-theme">
      <div className=" w-full mx-auto  max-w-maximo-ancho pos-sticky  " />
      <nav className=" grid grid-cols-3 max-w-maximo-ancho mx-auto p-5 ">
        <div className=" h-14 flex flex-wrap content-center justify-center">
          <Link to="/" className="cursor-pointer ">
            <img
              className="hover:opacity-45 transition-all duration-500 ease-out"
              src={imagenLogo}
              alt=""
            />
          </Link>
        </div>
        <div className=" h-14 flex flex-wrap content-center justify-center relative">
          <input
            className="border border-slate-600 dark:placeholder:text-white dark:text-white p-2 rounded-md border-solid focus:outline-none dark:bg-dark_placeholderYborder"
            type="search "
            placeholder="Buscar.."
          />
        </div>
        <div className=" flex  gap-[3rem] items-center ">
          <a className="cursor-pointer ">ingresar</a>
          <a className="cursor-pointer ">registrarme</a>
          <CartIcon/>
          <DarkLight />
        </div>
      </nav>
      <div></div>
    </ul>
  );
};
