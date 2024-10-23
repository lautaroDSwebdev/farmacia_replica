import './style.css'
import data from "../src/mock/data.json"
import { Link, Outlet } from 'react-router-dom'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HiMagnifyingGlass } from "react-icons/hi2";
import DakLight from './components/SectionsHome/nav/DakLight';
import Nav from './components/SectionsHome/nav/Nav';
import { useSelector } from 'react-redux';
import {  useState } from 'react';
import ShowSelectedProd from './components/SectionsHome/viewProducts/ShowSelectedProd';
const imagenLogo = data.entireHome.logoPagina



function App() {

        const [view_cart, setEstado ] = useState(false)

    const first = ( ) => { 
        setEstado(!view_cart)
     }

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
        right: -6,
        top: 0,
        border: `2px solid ${theme.palette.background.paper}`,
    },
    }));
        const selectorRedux = useSelector(state => state.cart.cart)
        console.log(selectorRedux)
  return (
    <>
        <header className="">
            <div className="flex bg-red-500 justify-center ">
                <i className="  text-1xl text-[#ffffff]">¡Usted está comprando en Mas Farmacia !</i>
            </div>
            <ul className='borde_nav p-1'>

            <div className=" w-full mx-auto  max-w-maximo-ancho pos-sticky  " />
                <nav className=" grid grid-cols-3 max-w-maximo-ancho mx-auto p-5 ">
                    <div className=" h-14 flex flex-wrap content-center justify-center">
                        <Link to="/"  className="cursor-pointer ">
                            <img className='hover:opacity-45 transition-all duration-500 ease-out' src={imagenLogo}  alt="" />
                        </Link>
                    </div>
                    <div className=" h-14 flex flex-wrap content-center justify-center relative">
                        <input className="border border-slate-600  p-2 rounded-md border-solid focus:outline-none" type="search " placeholder="Buscar.." />
                        <HiMagnifyingGlass className='absolute top-[20px] left-[1rem]  bg-[#e3dfdf]'/>
                    </div>
                    <div className=" flex  gap-[3rem] items-center ">
                        <a className="cursor-pointer ">ingresar</a>
                        <a className="cursor-pointer ">registrarme</a>
                        <ul className=' '>

                        <IconButton onClick={first} aria-label="cart">
                            <StyledBadge badgeContent={selectorRedux.length} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                            {
                                !view_cart && 
                                <ShowSelectedProd selectorRedux={selectorRedux} />
                            }
                        </ul>
                        <DakLight/> 
                    </div>
                    </nav>
                    <div >
                </div>
            </ul>
                <Nav/>
        </header>


        <Outlet/>
    </>
  )
}

export default App
