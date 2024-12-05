import { useContext } from "react"
import { ContextData } from "./ContextoProveedor"

export const useFilters = () => { 
    const Contexto = useContext(ContextData)  
    if (!Contexto) {
        throw new Error ("Error de filtro")
    } 
    return Contexto
    
 }
  