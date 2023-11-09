import {ProductContext} from "../../store/products.context";
import {useContext} from "react";
import {ProductCard} from "../../components/productCard/productCard";

import './shop.styles.scss'

export const Shop = () => {
    const {products} = useContext(ProductContext);

    return (
        <div className={'products-container'}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}