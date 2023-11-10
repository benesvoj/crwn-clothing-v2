import {useContext} from "react";
import {CartContext} from "../../store/cart.contex";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, totalItemsCount} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{totalItemsCount}</ItemCount>
        </CartIconContainer>
    )
}