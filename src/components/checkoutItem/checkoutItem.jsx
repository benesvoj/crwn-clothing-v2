import './checkout-item.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../store/cart.contex";

export const CheckoutItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem

    const {addItemToCart, remoteItemFromCart, clearItemFromCart} = useContext(CartContext)

    const totalPrice = quantity * price

    const handleRemoveItem = () => remoteItemFromCart(cartItem)
    const handleAddItem = () => addItemToCart(cartItem)
    const handleClearItem = () => clearItemFromCart(cartItem)

    return (
        <div className={'checkout-item-container'}>
            <div className={'image-container'}>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className={'name'}>{name}</span>
            <div className={'quantity'}>
                <div className={'arrow'} onClick={handleRemoveItem}>&#10094;</div>
                <span className={'value'}>{quantity}</span>
                <div className={'arrow'} onClick={handleAddItem}>&#10095;</div>
            </div>
            <span className={'price'}>$ {totalPrice}</span>
            <div className={'remove-btn'} onClick={handleClearItem}>&#10005;</div>
        </div>
    )
}