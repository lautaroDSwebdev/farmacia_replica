import { ProductDetails } from "../../types/types"
import { useFilters } from "../../context/useFilters"

export const DataComponentFilter = () => { 
    const {filters, setFilters } = useFilters()

    const filterProducts = (prodsDermo: any) => {
        return prodsDermo.filter((product: ProductDetails) => {
            return (
                product.precio >= filters.minPrice &&  
                filters.marca === 'all' || product.marca === filters.marca &&
                filters.masComprado >= 20 || product.masComprado >  filters.masComprado &&
                filters.inStock >= 1 || product.stock > filters.inStock
            )
        })
    }

    return { filters, filterProducts, setFilters }
}

