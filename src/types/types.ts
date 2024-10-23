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
    price: string
    stock: number
    description: string
    add_kart: string
  }
  