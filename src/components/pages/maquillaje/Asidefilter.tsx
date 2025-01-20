
import { DataComponentFilter } from "../../filter/DataFilter";

export const Asidefilter = () => {
  const { filters, setFilters } = DataComponentFilter();


  const handleChangeMinPrice = (event: any) => {
    setFilters((prevState: any) => ({
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
          min={35000}
          max={60000}
          id=""
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>
    </aside>
  );
};
