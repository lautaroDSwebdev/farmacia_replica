// import { SubmenuTypes } from '../../types';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";

const MenuItems = ({ items, depthLevel }: { items: any, depthLevel: number }) => {

    const [dropdown, setDropdown] = useState(false);

    let ref = useRef<HTMLLIElement>(null);


    useEffect(() => {
        const handler = (event: any) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);


    const onMouseEnter = () => {
        setDropdown(true);
    };
    const onMouseLeave = () => {
        setDropdown(false);
    };


    return (
        <li className="menu-items" ref={ref}

            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <Link to={items.link}>
                        <a type="button" aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {items.title}
                        </a>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                    </Link>
                </>
            ) : (
                <a href="/#">{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;