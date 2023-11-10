import {CartItem} from "../cartItem/cartItem";
import {useContext} from "react";
import {CartContext} from "../../store/cart.contex";
import {useNavigate} from "react-router-dom";
import {urls} from "../../utils/urls";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import Button from "../button/button";

export const CartDropdown = () => {
    const {cartItems, setIsCartOpen, isCartOpen} = useContext(CartContext)
    const navigate = useNavigate()


    const navigateToCheckout = () => {
        setIsCartOpen(!isCartOpen)
        navigate(`/${urls.checkout}`)
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length
                    ? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>)))
                    : (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={navigateToCheckout}>CHECKOUT</Button>
        </CartDropdownContainer>
    )

}