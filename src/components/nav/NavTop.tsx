import { Link, useNavigate } from "react-router-dom";
import data from "../../mock/data.json";
import CartIcon from "./CartIcon";
import DarkLight from "./DarkLight";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../../firebase/firebase";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Login } from "./Login";
export const NavTop = () => {

  const imagenLogo = data.entireHome.logoPagina;
  const [user] = useAuthState(Auth)
  const nav = useNavigate()

  const NavLogin = () => {
    nav("/login")
  }

  const [first, setfirst] = useState(false)


  return (
    <ul className="borde_nav p-1 dark:bg-dark-theme ">
      <div className=" w-full mx-auto  max-w-maximo-ancho pos-sticky  " />
      <nav className=" grid md:grid-cols-3 grid-cols-2  max-w-maximo-ancho mx-auto z-[999] relative  ">
        <div className=" flex flex-wrap content-center justify-center">
          <Link to="/" className="cursor-pointer ">
            <img
              className="hover:opacity-45 transition-all duration-500 ease-out"
              src={imagenLogo}
              alt=""
            />
          </Link>
        </div>
        <div className=" h-14 g-responsive-options flex-wrap content-center justify-center relative">
          <input
            className=" border border-slate-600 dark:placeholder:text-white dark:text-white p-2 rounded-md border-solid focus:outline-none dark:bg-dark_placeholderYborder"
            type="search "
            placeholder="Buscar.."
          />
        </div>
        <div className="flex  gap-[1.2rem] items-center justify-center  ">
          
          {
            !user ?
              <button onClick={NavLogin} className="cursor-pointer text-[12px] hover:text-red-600 font-semibold dark:text-[#d5d4d4] g-responsive-options">Ingresar | Registrarme</button>
              :
              <button className="hover:bg-slate-300  gap-3 p-2 rounded-md " onClick={NavLogin}>
                <p className="g-responsive-options">{user?.displayName}</p>
                <img className="g-img-google-nav" src={user?.photoURL as string} alt="Imagen Google" />
              </button>
          }
          <CartIcon />
          {
            first ?
              <RxCross1 onClick={() => setfirst(!first)} className=" md:hidden flex cursor-pointer" /> :
              <GiHamburgerMenu onClick={() => setfirst(!first)} className=" md:hidden flex cursor-pointer" />

          }
          <section className="g-responsive-options">
            <DarkLight />
          </section>

        </div>
      </nav>
      <div></div>
      <div className={` min-h-[9vh] max-h-[9vh] flex justify-center items-center gap-4 ${first ? "g-options-navtop-dropdown" : "g-options-navtop-dropdown-of"} `}>
        <DarkLight />
        <Login />
      </div>
    </ul>
  );
};
