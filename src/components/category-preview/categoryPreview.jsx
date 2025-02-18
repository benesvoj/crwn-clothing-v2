import {ProductCard} from "../productCard/productCard";
import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";

export const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products
                        .filter((_, index) => index < 4)
                        .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}