import './cart-dropdown.styles.scss'
import {Button} from "../button/button";
import {CartItem} from "../cartItem/cartItem";
import {useContext, useEffect} from "react";
import {CartContext} from "../../store/cart.contex";
import {useNavigate} from "react-router-dom";
import {urls} from "../../utils/urls";

export const CartDropdown = () => {
    const {cartItems, setIsCartOpen, isCartOpen} = useContext(CartContext)
    const navigate = useNavigate()


    const navigateToCheckout = () => {
        setIsCartOpen(!isCartOpen)
        navigate(`/${urls.checkout}`)
    }

    return (
        <div className={'cart-dropdown-container'}>
            <div className={'cart-items'}>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item}/>
                })}
            </div>
            <Button onClick={navigateToCheckout}>CHECKOUT</Button>
        </div>
    )

}