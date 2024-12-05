import { ProductDetails } from "../../types/types"
import { useFilters } from "../../context/useFilters"

export const HelperFiltro = () => { 
    const {filters, setFilters } = useFilters()

    const filterProducts = (prodsDermo: any) => {
        return prodsDermo.filter((product: ProductDetails) => {
            return (
                product.precio >= filters.minPrice &&  filters.marca === 'all' || product.marca === filters.marca 
            )
        })
    }

    return { filters, filterProducts, setFilters }
}

