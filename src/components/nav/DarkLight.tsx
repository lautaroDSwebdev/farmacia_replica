import { useEffect, useState } from "react";
import "./style.css";
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
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={handleChangeTheme}>
      {theme === "dark" ? (
        <LuSun className="text-3xl text-[#fbff2c]   " />
      ) : (
        <FaMoon className="text-3xl  " />
      )}
    </button>
  );
};

export default DarkLight;
