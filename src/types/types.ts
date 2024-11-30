export interface ProductDetails {
  id: number;
  marca: string;
  desc: string;
  stock: number;
  discountImg: string;
  discountPrice: string;
  imgAlt: string;
  img: string;
  precio: number;
}
export interface TypesFilter{
  marca: string ;
  minPrice: number;
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