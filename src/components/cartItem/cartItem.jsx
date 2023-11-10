import {CartItemContainer, CartItemImage, ItemDetails, Name} from "./cart-item.styles";

export const CartItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span className={'price'}>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}