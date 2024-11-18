export interface ProductDetails {
    id: number | never;
    img: string;
    title: string;
    price: string; 
    desc: string;
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
    addkart: string
    desc: string
    price: number
  }