import { submenus } from "../../mock/dataSubmenus";
import MenuItems from "./MenuItems";

const NavbarSubmenus = () => {
    const depthLevel = 0;
    return(
        <nav className="main-nav">
            <ul className="menus">
                {submenus.map((menu,index)=>{
                    return(
                        <MenuItems items={menu} key={index} depthLevel={depthLevel}/>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavbarSubmenus;