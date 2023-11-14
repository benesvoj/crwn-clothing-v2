import './checkout.styles'
import {CheckoutItem} from "../../components/checkoutItem/checkoutItem";
import {CheckoutContainer, CheckoutHeader, CheckoutFooter, HeaderBlock} from "./checkout.styles";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

export const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)


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