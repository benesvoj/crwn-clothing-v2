import {
    Arrow,
    CheckoutItemContainer,
    Image,
    ImageContainer,
    Name,
    Price,
    Quantity, RemoveButton,
    Value
} from "./checkout-item.styles";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

export const CheckoutItem = ({cartItem}) => {
    const {name, quantity, imageUrl} = cartItem
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const totalPrice = useSelector(selectCartTotal)

    const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem))
    const handleClearItem = () => dispatch(clearItemFromCart(cartItems, cartItem))

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleAddItem}>&#10095;</Arrow>
            </Quantity>
            <Price>$ {totalPrice}</Price>
            <RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}