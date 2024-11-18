import { createContext, useState } from "react"

export const ContextData =  createContext()

export const ContextoProveedor = ({children}: {children: any}) => {
  const [filters, setFilters] = useState({
    marca: 'all',
    minPrice: 0
  })

  return (
    <ContextData.Provider value={{ setFilters, filters}}>
        {children}
    </ContextData.Provider>
  )
}
