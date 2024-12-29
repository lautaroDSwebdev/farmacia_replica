import CarruselComponent from "./SectionsHome/bannerHeader/CarruselComponent"
import DiscountPrice from "./SectionsHome/brands_discount_percent/DiscountPrice"
import Products2 from "./SectionsHome/products2/Products2"
import Products1 from "./SectionsHome/products1/ProductsFather"
import NewsComp from "./SectionsHome/News/NewsComp"
import cards from '../../../mock/data.json'
const HomePage = () => {
    let {home_redCardsTop} = cards.entireHome
    let {home_redCardsBottom} = cards.entireHome
    return (
        <>
        <CarruselComponent/>    
        <DiscountPrice/>
            <article className="pt-[3rem] w-full">
                <div className="flex justify-center gap-3 max-w-maximo-ancho mx-auto">
                    <img className="h-[10rem] cursor-pointer" src={home_redCardsTop[0]} alt=""/>
                    <img className="h-[10rem] cursor-pointer" src={home_redCardsTop[1]} alt=""/>
                </div>
            </article>
        <Products1/>
            <article className="pt-[3rem] w-full">
                <div className="flex justify-center gap-3 max-w-maximo-ancho mx-auto">
                    <img className="h-[10rem] cursor-pointer" src={home_redCardsBottom[0]} alt=""/>
                    <img className="h-[10rem] cursor-pointer" src={home_redCardsBottom[1]} alt=""/>
                </div>
            </article>
        <Products2/>
        <NewsComp/>
        </>
    )
}

export default HomePage