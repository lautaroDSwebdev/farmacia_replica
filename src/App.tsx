import "./style.css";

import { Outlet } from "react-router-dom";
import Nav from "./components/SectionsHome/nav/Nav";
import { NavTop } from "./components/nav/NavTop";
import { Toaster } from 'sonner'

function App() {


  return (
    <>
      <header className="dark:bg-dark_theme_details ">
        <div className="flex  justify-center bg-dark_theme_details ">
          <i className=" text-1xl text-[#ffffff] ">
            ¡Usted está comprando en Mas Farmacia !
          </i>
        </div>
        <NavTop />
        <Nav />
      </header>
      <Toaster />
      <Outlet />
    </>
  );
}

export default App;
