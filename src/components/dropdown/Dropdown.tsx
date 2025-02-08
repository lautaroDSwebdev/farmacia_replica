import { SubmenuTypes } from "../../types";
import MenuItemsDropdown from "./MenuItemsDropdown";

export const Dropdown = ({submenus, dropdown,depthLevel}: {submenus:  SubmenuTypes[], dropdown: boolean, depthLevel: number }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" :"";
    return(
        <ul className={`dropdown dark:bg-dark-productstheme ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index)=>(
                <MenuItemsDropdown items={submenu} key={index} depthLevel={depthLevel}/>
            ))}
        </ul>
    );
};

  ;