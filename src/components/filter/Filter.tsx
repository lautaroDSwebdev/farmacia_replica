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
    <section className="bg-[#F9F9F9]">
      <div className="  w-full  mx-auto h-[10vh] pb-4 max-w-maximo-ancho  ">
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

        <Outlet />
      </div>
    </section>
  );
};

export default Filter;
