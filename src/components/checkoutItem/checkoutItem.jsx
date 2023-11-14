import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contex";
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

export const CheckoutItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem

    const {addItemToCart, remoteItemFromCart, clearItemFromCart} = useContext(CartContext)

    const totalPrice = quantity * price

    const handleRemoveItem = () => remoteItemFromCart(cartItem)
    const handleAddItem = () => addItemToCart(cartItem)
    const handleClearItem = () => clearItemFromCart(cartItem)

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