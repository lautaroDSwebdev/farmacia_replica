export interface ProductDetails {
  id: number
  marca: string
  desc: string
  stock: number
  discountImg?: string
  discountPrice?: number | null
  img: string
  imgAlt: string
  precio: number
  masComprado: number
}
export interface TypesFilter{
  marca: string ;
  minPrice: number;
  masComprado: number;
  inStock: number;
}

export interface TypesSelectMarca{
  id: number
  op: string
  valor: string
}
export interface ContextFilterType{
  filters:  TypesFilter 
  setFilters: (state: any )=> any 
}

  export interface ProductsSelected {
    id: number
    img: string
    title: string
    price: number
    stock: number
    description: string
    add_kart: string
  }
  
  export interface TypesCart{
    id: string
    stock: number
    title: string
    img: string
    imgAlt: string
    addkart: string
    desc: string
    price: number
  }