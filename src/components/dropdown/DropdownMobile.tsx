import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import "./style.css"
import { submenus } from '../../mock/dataSubmenus'
import { Link } from 'react-router-dom'

interface TypesData {
    title: string
    submenu: Submenus[]
}
interface Submenus {
    title: string
    link: string

}
export const DropdownMobile = () => {

    const submenu = [
        {
            title: "Dermocosmetica",
            link: "/productos/Dermocosmetica",
        },
        {
            title: "Cuidado de piel",
            link: "/productos/Cuidado-de-Piel",
        },
        {
            title: "Maquillaje",
            link: "/productos/Maquillaje",
        },
        {
            title: "Cuidado del bebe y la mama",
        }
    ]
    return (
        <Menu as="div" className="relative inline-block text-left ">
            <MenuButton className="flex gap-2 overflow-visible">
                <svg className='g-red' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                Categoria
            </MenuButton>

            <MenuItems
                transition
                className="gradientRed absolute right-[-77px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                {
                    submenu.map(e => (
                        <MenuItem key={e.title}>
                            <Link
                                to={e.link as string}
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                            >
                                {e.title}
                            </Link>
                        </MenuItem>
                    ))
                }
            </MenuItems>
        </Menu>
    )
}
