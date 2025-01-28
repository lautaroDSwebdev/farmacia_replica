import "./global.css";

import { Outlet } from "react-router-dom";
import { NavTop } from "./components/nav/NavTop";
import { Toaster } from 'sonner'
import Nav from "./components/pages/homepage/SectionsHome/nav/Nav";

function App() {


  return (
    <>
      <header className="dark:bg-dark-theme  ">
        <div className="flex  justify-center dark:bg-dark_theme_details bg-[#fa1a1a] ">
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
