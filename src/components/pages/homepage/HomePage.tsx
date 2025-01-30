import CarruselComponent from "./SectionsHome/bannerHeader/CarruselComponent"
import DiscountPrice from "./SectionsHome/brands_discount_percent/DiscountPrice"
import Products2 from "./SectionsHome/products2/Products2"
import Products1 from "./SectionsHome/products1/ProductsFather"
import NewsComp from "./SectionsHome/News/NewsComp"
// import cards from '../../../mock/data.json'
const HomePage = () => {
    // let {home_redCardsTop} = cards.entireHome
    // let {home_redCardsBottom} = cards.entireHome
    return (
        <>
        <CarruselComponent/>    
        <DiscountPrice/>
            <article className="pt-[3rem] w-full g-article-redcards">
                <div className=" max-w-maximo-ancho ">
                    <img className="" src="./make-up.png" alt="Card Make-up"/>
                    <img className="" src="./Perfumes.png" alt="Card Perfumes"/>
                </div>
            </article>
        <Products1/>
            <article className="pt-[3rem] w-full g-article-redcards">
                <div className=" max-w-maximo-ancho ">
                    <img className="" src="./Maternidad-y-bebe.png" alt="Card Maternidad-y-bebe"/>
                    <img className="" src="./Skin-care.png" alt="Card Skin-care"/>
                </div>
            </article>
        <Products2/>
        <NewsComp/>
        </>
    )
}

export default HomePage