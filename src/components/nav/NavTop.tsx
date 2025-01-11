import { Link, useNavigate } from "react-router-dom";
import data from "../../mock/data.json";
import CartIcon from "./CartIcon";
import DarkLight from "./DarkLight";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../../firebase/firebase";
export const NavTop = () => {

  const imagenLogo = data.entireHome.logoPagina;
  const [user] = useAuthState(Auth)



  const nav = useNavigate()

  const NavLogin = () => {
    nav("/login")
  }

  return (
    <ul className="borde_nav p-1 dark:bg-dark-theme">
      <div className=" w-full mx-auto  max-w-maximo-ancho pos-sticky  " />
      <nav className=" grid grid-cols-3 max-w-maximo-ancho mx-auto  ">
        <div className=" flex flex-wrap content-center justify-center">
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
        <div className=" flex  gap-[3rem] items-center  ">
          
          {
            !user ?
              <button  onClick={NavLogin} className="cursor-pointer hover:text-red-600 font-semibold ">Ingresar | Registrarme</button>
              :
              <button className="hover:bg-slate-300 flex gap-3 p-2 rounded-md" onClick={NavLogin}>
                <p>{user?.displayName}</p>
                <img className="g-img-google-nav" src={user?.photoURL as string} alt="Imagen Google" />
              </button>
          }
          <CartIcon />
          <DarkLight />

        </div>
      </nav>
      <div></div>
    </ul>
  );
};
