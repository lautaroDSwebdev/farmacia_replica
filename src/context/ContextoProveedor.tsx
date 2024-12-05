import  { createContext, useState } from "react"
import { ContextFilterType, TypesFilter } from "../types/types"



export const ContextData =  createContext<ContextFilterType | undefined>(undefined)

export const ContextoProveedor = ({children}: {children: any}) => {


  const [filters, setFilters] = useState<TypesFilter>({
    marca: 'all',
    minPrice: 0
  })

  return (
    <ContextData.Provider value={{ setFilters, filters}}>
        {children}
    </ContextData.Provider>
  )
}
