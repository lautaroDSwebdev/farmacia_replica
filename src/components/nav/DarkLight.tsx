import { useEffect, useState } from "react";
import "./style.css";
import ReactSwitch from "react-switch";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa6";
const DarkLight = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "light";
    }

    return "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // <label htmlFor="theme" className="theme " >
    //   <span className="theme__toggle-wrap">
    //     <input
    //       id="theme"
    //       className="theme__toggle"
    //       type="checkbox"
    //       role="switch"
    //       name="theme"
    //       // value="dark"
    //
    //     />
    //     <span className="theme__fill"></span>
    //     <span className="theme__icon">
    //       <span className="theme__icon-part"></span>
    //       <span className="theme__icon-part"></span>
    //       <span className="theme__icon-part"></span>
    //       <span className="theme__icon-part"></span>
    //       <span className="theme__icon-part"></span>
    //       <span className="theme__icon-part"></span>
    //       <span className="theme__icon-part"></span>
    //       <span className="theme__icon-part"></span>
    //       <span className="theme__icon-part"></span>
    //     </span>
    //   </span>
    // </label>

    <button onClick={handleChangeTheme}>
      {theme === "dark" ? <LuSun className="text-3xl text-yellow-400   " /> : <FaMoon className="text-3xl text-sky-800 " />}
    </button>
  );
};

export default DarkLight;
