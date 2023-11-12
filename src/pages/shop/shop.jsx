import {CategoriesContext} from "../../store/categories.context";
import {useContext} from "react";
import {CategoryPreview} from "../../components/category-preview/categoryPreview";

export const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);

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

