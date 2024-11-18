import { useId } from "react";
import { HelperFiltro } from "./HelperFilter";

export const Asidefilter = () => {
  const { filters, setFilters } = HelperFiltro();

  const minPriceFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  return (
    <aside className="     ">
      <div className="w-full m-3 relative left-0   mx-auto  ">
        <p>Precio a partir de {filters.minPrice}</p>
        <input className="cursor-pointer"
          type="range"
          name=""
          min={30000}
          max={65000}
          id=""
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>
    </aside>
  );
};
