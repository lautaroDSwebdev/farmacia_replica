import CarruselComponent from "./SectionsHome/bannerHeader/CarruselComponent"
import DiscountPrice from "./SectionsHome/brands_discount_percent/DiscountPrice"
import Products2 from "./SectionsHome/products2/Products2"
import Products1 from "./SectionsHome/products1/ProductsFather"
import NewsComp from "./SectionsHome/News/NewsComp"
const HomePage = () => {
    return (
        <>
        <CarruselComponent/>    
        <DiscountPrice/>
            <article className="pt-[3rem] w-full">
                <div className="flex justify-center gap-3 max-w-maximo-ancho mx-auto">
                    <img className="h-[10rem] cursor-pointer" src="../../../public/assets/make-up.png" alt=""/>
                    <img className="h-[10rem] cursor-pointer" src="../../../public/assets/Perfumes.png" alt=""/>
                </div>
            </article>
        <Products1/>
            <article className="pt-[3rem] w-full">
                <div className="flex justify-center gap-3 max-w-maximo-ancho mx-auto">
                    <img className="h-[10rem] cursor-pointer" src="../../../public/assets/Maternidad-y-bebe.png" alt=""/>
                    <img className="h-[10rem] cursor-pointer" src="../../../public/assets/Skin-care.png" alt=""/>
                </div>
            </article>
        <Products2/>
        <NewsComp/>
        </>
    )
}

export default HomePage