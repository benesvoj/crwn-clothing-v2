import {useEffect} from "react";
import {CategoryPreview} from "../../components/category-preview/categoryPreview";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useDispatch, useSelector} from "react-redux";
import {setCategories} from "../../store/categories/categories.action";
import {selectCategories} from "../../store/categories/categories.selector";

export const Shop = () => {
    const categoriesMap = useSelector(selectCategories)
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories')
            dispatch(setCategories(categoriesArray))
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

