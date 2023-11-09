import {CategoriesContext} from "../../store/categories.context";
import {useContext} from "react";

import './shop.styles.scss'
import {CategoryPreview} from "../../components/category-preview/categoryPreview";

export const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    return (
        <div className={'shop-container'}>
            {
                Object.keys(categoriesMap).map((category) => {
                    const products = categoriesMap[category]
                    return (
                        <CategoryPreview key={category} title={category} products={products}/>
                    )
                })
            }
        </div>
    )
}