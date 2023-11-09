import './category.styles.scss'
import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../store/categories.context";
import {useContext, useEffect, useState} from "react";
import {ProductCard} from "../../components/productCard/productCard";

export const Category = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    console.log('fire category')

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className={'category-container'}>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </>
    )
}