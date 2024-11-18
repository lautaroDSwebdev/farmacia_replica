import { useContext } from "react"
import { ContextData } from "../../context/ContextoProveedor"

export const HelperFiltro = () => { 
    const {filters, setFilters } = useContext(ContextData)
    
    
    const filterProducts = (prodsDermo) => {
        return prodsDermo.filter(product => {
            return (
                product.precio >= filters.minPrice &&
                (
                    filters.marca === 'all' ||
                    product.marca === filters.marca
                )
            )
        })
    }

    return { filters, filterProducts, setFilters }
}

