import { NavLink } from "react-router-dom";
import data from "../../../../../mock/data.json";
import "./style.css";
const nav = data.entireHome.nav_options;

const Nav = () => {
  return (
    <div className="flex justify-evenly  max-w-[900px] mx-auto pt-[1rem] links_style">
      <div className=" ul-cath">
        <div className="inline-flex flex-wrap content-center height-cath">
          <img src="/frame botom hamburguesa.svg" alt="" />
          <b className=" text-red-500 text-decoration  dark:text-white  ">
            Categorias
          </b>
        </div>
      </div>

      {nav.map((item) => (
        <ul className="" key={item.id}>
          <NavLink
            to={item.url}
            className={({ isActive, isPending }) =>
              isPending
                ? "text-blue-500"
                : isActive
                  ? "text-red-500 dark:text-white"
                  : "text-black"
            }
          >
            {item.title}
          </NavLink>
        </ul>
      ))}
      <div className=" ul-ofertas">
        <b className="  dark:text-white">Ofertas</b>
      </div>
    </div>
  );
};

export default Nav;
