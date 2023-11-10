import {CategoriesContext} from "../../store/categories.context";
import {useContext} from "react";

import {CategoryPreview} from "../../components/category-preview/categoryPreview";
import styled from "styled-components";

export const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    console.log('fire shop')

    return (
        <ShopContainer>
            {
                Object.keys(categoriesMap).map((category) => {
                    const products = categoriesMap[category]
                    return (
                        <CategoryPreview key={category} title={category} products={products}/>
                    )
                })
            }
        </ShopContainer>
    )
}


const ShopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`