import './cart-dropdown.styles.scss'
import {Button} from "../button/button";

export const CartDropdown = () => {
return (
    <div className={'cart-dropdown-container'}>
        <dov className={'cart-items'}></dov>
        <Button>CHECKOUT</Button>
    </div>
)

}