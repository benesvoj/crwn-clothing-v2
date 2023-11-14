import {CartItem} from "../cartItem/cartItem";
import {useNavigate} from "react-router-dom";
import {urls} from "../../utils/urls";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems, selectIsCartOpen} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.action";

export const CartDropdown = () => {
    const dispatch = useDispatch()

    const isCartOpen = useSelector(selectIsCartOpen)
    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate()


    const navigateToCheckout = () => {
        dispatch(setIsCartOpen(!isCartOpen))
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