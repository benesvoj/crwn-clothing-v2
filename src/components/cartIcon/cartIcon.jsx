import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contex";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}