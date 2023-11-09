import './cartItems.styles.scss'

export const CartItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem

    return(
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}