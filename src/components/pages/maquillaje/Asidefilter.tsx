import { useId } from "react";
import { HelperFiltro } from "../../filter/HelperFilter";

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
      <div className="w-full m-3 relative left-0 dark:bg-dark-theme   mx-auto  ">
        <p>Precio a partir de ${filters.minPrice}</p>
        <input className="cursor-pointer"
          type="range"
          name=""
          min={3000}
          max={30000}
          id=""
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>
    </aside>
  );
};
