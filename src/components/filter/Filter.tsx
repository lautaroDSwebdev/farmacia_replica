import React from "react";
import { Outlet } from "react-router-dom";

const Filter = () => {
  const filterData = [
    {
      op: "Orden por defecto",
    },
    {
      op: "Ordenar por destacado",
      valor: "1",
    },
    {
      op: "Ordenar por los ultimos",
      valor: "2",
    },
    {
      op: "Ordenar por precio bajo a alto",
      valor: "3",
    },
    {
      op: "Ordenar por precio alto  a bajo",
      valor: "4",
    },
  ];

  return (
    <div className="bg-[#F9F9F9]  w-full  mx-auto h-[10vh] pb-4  ">
      <ul className="flex flex-col justify-center h-[10vh]">
        <form
          className=" flex justify-end content-center mx-auto max-w-maximo-ancho w-full  "
          method="post"
          action="/send/"
        >
          <select className="p-2 rounded-md cursor-pointer focus:outline-none">
            {filterData.map((e) => (
              <option value={e.valor}>{e.op}</option>
            ))}
          </select>
        </form>
      </ul>
      <aside className="fixed  h-full w-[15%] bg-[#F9F9F9]">
                <p> hola 1</p>
                <p> hola 2</p>
                <p> hola 3</p>
                <p> hola 4</p>
      </aside>
      <Outlet />
    </div>
  );
};

export default Filter;