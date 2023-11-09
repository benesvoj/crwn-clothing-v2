import './checkout.styles.scss'
import {CheckoutItem} from "../../components/checkoutItem/checkoutItem";
import {CartContext} from "../../store/cart.contex";
import {useContext} from "react";

export const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext)

    return (
        <div className={'checkout-container'}>
            <div className={'checkout-header'}>
                <div className={'header-block'}>
                    <span>Product</span>
                </div>
                <div className={'header-block'}>
                    <span>Description</span>
                </div>
                <div className={'header-block'}>
                    <span>Quantity</span>
                </div>
                <div className={'header-block'}>
                    <span>Price</span>
                </div>
                <div className={'header-block'}>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
            <div className={'footer'}>Total: $ {cartTotal}</div>
        </div>
    )
}