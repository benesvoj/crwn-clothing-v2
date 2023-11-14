import {useEffect} from "react";
import {CategoryPreview} from "../../components/category-preview/categoryPreview";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useDispatch, useSelector} from "react-redux";
import {setCategoriesMap} from "../../store/categories/categories.action";
import {selectCategories} from "../../store/categories/categories.selector";

export const Shop = () => {
    const categoriesMap = useSelector(selectCategories)
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()

            dispatch(setCategoriesMap(categoryMap))
        }
        getCategoriesMap()
    }, []);

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

