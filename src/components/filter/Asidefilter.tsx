// import { useId } from "react";
import { ChangeEvent } from "react";
import { TypesFilter } from "../../types/types";
import { DataComponentFilter } from "./DataFilter";

export const Asidefilter = () => {
  const { filters, setFilters } = DataComponentFilter();


  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value
    if(!target) return null
    setFilters((prevState: TypesFilter) => ({
      ...prevState,
      minPrice: Number(target),
    }) );
  };
  return (
    <aside className=" ">
      <div className="w-full m-3 relative left-0 dark:bg-dark-theme   mx-auto  ">
        <p>Precio a partir de ${filters.minPrice}</p>
        <input className="cursor-pointer"
          type="range"
          name=""
          min={0}
          max={65000}
          id=""
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>
    </aside>
  );
};
