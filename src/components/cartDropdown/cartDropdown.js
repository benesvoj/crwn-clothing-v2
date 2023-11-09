import './cart-dropdown.styles.scss'
import {Button} from "../button/button";
import {CartItem} from "../cartItem/cartItem";
import {useContext} from "react";
import {CartContext} from "../../store/cart.contex";

export const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)

return (
    <div className={'cart-dropdown-container'}>
        <div className={'cart-items'}>
            {cartItems.map((item) => {
                return <CartItem key={item.id} cartItem={item}/>
            })}
        </div>
        <Button>CHECKOUT</Button>
    </div>
)

}