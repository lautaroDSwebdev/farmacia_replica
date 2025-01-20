import { useId } from "react";
import { Outlet } from "react-router-dom";
import { DataComponentFilter } from "./DataFilter";
import { TypesSelectMarca } from "../../types/types";

const Filter = () => {
  const categoryFilterId = useId();
  const { setFilters } = DataComponentFilter();

  const handleChangeCategory = (event: any) => {
    setFilters((prevState: TypesSelectMarca) => ({ ...prevState, marca: event.target.value }));
    console.log(event.target.value)
  };
  const filterData = [
    {
      id: 1,
      op: "todo",
      masComprado: "all",
    },
    {
      id: 2,
      op: "mas comprado",
      masComprado: "moresale",
    },
    {
      id:3,
      op: "en stock",
      stock: 0
    }
    // {
    //   id: 2,
    //   op: "A-Derma",
    //   valor: "A-Derma",
    // },
    // {
    //   id: 3,
    //   op: "La Roche-Posay",
    //   valor: "La Roche-Posay",
    // },
    // {
    //   id: 4,
    //   op: "Anthelios",
    //   valor: "Anthelios",
    // },
  ];

  return (
    <section className="bg-[#F9F9F9] dark:bg-dark-theme ">
      <div className="  w-full  mx-auto h-[10vh] pb-4 max-w-maximo-ancho  ">
        <ul className="flex flex-col justify-center  h-[10vh] max-w-maximo-ancho">
          <form
            className=" flex justify-between content-center mx-auto max-w-maximo-ancho w-full  "
            method="post"
            action="/send/"
          >
            <p className="flex items-center opacity-70">
              inicio/Dermocosmetica
            </p>

            <div className="">
              <label className="hidden" htmlFor={categoryFilterId}>
                Categoria
              </label>
              <select
                id={categoryFilterId}
                onChange={handleChangeCategory}
                className="p-2 rounded-md cursor-pointer focus:outline-none dark:bg-dark_placeholderYborder"
              >
                {filterData.map((e) => (
                  <option key={e.id} value={e.masComprado}>
                    {e.op}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </ul>

        <Outlet />
      </div>
    </section>
  );
};

export default Filter;
