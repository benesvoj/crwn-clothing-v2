import './checkout.styles'
import {CheckoutItem} from "../../components/checkoutItem/checkoutItem";
import {CartContext} from "../../contexts/cart.contex";
import {useContext} from "react";
import {CheckoutContainer, CheckoutHeader, CheckoutFooter, HeaderBlock} from "./checkout.styles";

export const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
            <CheckoutFooter>Total: $ {cartTotal}</CheckoutFooter>
        </CheckoutContainer>
    )
}