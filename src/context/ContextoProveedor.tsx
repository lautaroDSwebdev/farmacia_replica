import  { createContext, useState } from "react"
import { TypesFilter } from "../types/types"


interface ContextType{
  filters:  TypesFilter 
  setFilters: (state: TypesFilter )=> void | TypesFilter
}

export const ContextData =  createContext<ContextType | undefined>(undefined)

// createContext<unknown>(defaultValue: unknown): React.Context<unknown>
// import createContext



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
