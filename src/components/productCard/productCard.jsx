import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contex";
import {FooterContainer, Name, Price, ProductCardContainer} from "./productCard.styles";

export const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const {addItemToCart} = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <FooterContainer>
                <Name>{name}</Name>
                <Price>$ {price}</Price>
            </FooterContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}