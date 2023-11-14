import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import {FooterContainer, Name, Price, ProductCardContainer} from "./productCard.styles";
import {addItemToCart} from "../../store/cart/cart.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, price, imageUrl } = product;

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

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