import {ProductContext} from "../../store/products.context";
import {useContext} from "react";


export const Shop = () => {
    const {products} = useContext(ProductContext);

    return (
        <div>
            {products.map(({id, name}) => (
                <div key={id}>
                    <h2>{name}</h2>
                </div>
            ))}
        </div>
    )
}