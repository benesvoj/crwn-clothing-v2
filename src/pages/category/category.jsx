import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../store/categories.context";
import {useContext, useEffect, useState} from "react";
import {ProductCard} from "../../components/productCard/productCard";
import styled from "styled-components";

export const Category = () => {
    const {category} = useParams()

    const {categoriesMap} = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return (
        <>
            <CategoryTitle className='category-title'>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </CategoryContainer>
        </>
    )
}

const CategoryContainer = styled.div`
    column-gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 50px;
`

const CategoryTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
    text-align: center;
`