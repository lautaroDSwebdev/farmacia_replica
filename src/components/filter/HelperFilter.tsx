import { ProductDetails } from "../../types/types"
import { useFilters } from "../../context/useFilters"

export const HelperFiltro = () => { 
    const {filters, setFilters } = useFilters()

    const filterProducts = (prodsDermo: ProductDetails[]) => {
        return prodsDermo.filter((product) => {
            return (
                product.precio >= filters.minPrice &&  filters.marca === 'all' || product.marca === filters.marca 
            )
        })
    }

    return { filters, filterProducts, setFilters }
}

