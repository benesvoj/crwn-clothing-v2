import {CategoriesContext} from "../../store/categories.context";
import {useContext} from "react";

import {CategoryPreview} from "../../components/category-preview/categoryPreview";

export const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    console.log('fire categories preview')

    return (
        <>
            {
                Object.keys(categoriesMap).map((category) => {
                    const products = categoriesMap[category]
                    return (
                        <CategoryPreview key={category} title={category} products={products}/>
                    )
                })
            }
        </>
    )
}