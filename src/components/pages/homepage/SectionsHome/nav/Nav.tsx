import { NavLink } from "react-router-dom";
import data from "../../../../../mock/data.json";
import "./style.css";
import { DropdownMobile } from "../../../../dropdown/index";
const { nav_options } = data.entireHome;

const Nav = () => {
  return (
    <div className="flex justify-evenly  max-w-[900px] mx-auto pt-[1rem] links_style">
      <div className=" ul-cath">
        <div className="inline-flex flex-wrap content-center height-cath">
          <img src="/frame botom hamburguesa.svg" alt="" />
          <b className=" g-red text-decoration  dark:textdarktheme">
            <nav className="main-nav flex items-center gap-2">
              {/* <GiHamburgerMenu></GiHamburgerMenu> */}
              <ul className="">
                {/* {submenus.map((menu, index) => {
                  return (
                    <MenuItemsDropdown items={menu} key={index} depthLevel={depthLevel} />
                  );
                })} */}


                <DropdownMobile />

              </ul>
            </nav>
          </b>
        </div>
      </div>

      {nav_options.map((item) => (
        <ul className="g-responsive-options nav-link-a" key={item.id}>
          <NavLink
            to={item.url}
            className={({ isActive, isPending }) =>
              isPending
                ? "text-blue-500"
                : isActive
                  ? "text-red-500 "
                  : ""
            }
          >
            {item.title}
          </NavLink>
        </ul>
      ))}
      {/* <div className=" ul-ofertas">
        <b className="  g-red rounded-md border border-red-600 p-[14px]">Super Ofertas</b>
      </div> */}
    </div>
  );
};

export default Nav;
