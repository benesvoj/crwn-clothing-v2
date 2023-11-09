import {Link} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import './navigation.styles.scss'
import {urls} from "../../utils/urls";
import {useContext} from "react";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {CartIcon} from "../cartIcon/cartIcon";
import {CartDropdown} from "../cartDropdown/cartDropdown";

import {UserContext} from "../../store/user.context";
import {CartContext} from "../../store/cart.contex";

export const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return (
        <nav className={'nav'}>
            <Link to={urls.home} className={'logo-container'}>
                <CrownLogo className={'nav-logo'}/>
            </Link>
            <div className={"nav-links"}>
                <Link className={"nav-link"} to={`/${urls.shop}`}>SHOP</Link>
                {
                    currentUser ? (
                        <span className={'nav-link'} onClick={signOutUser}>SING OUT</span>
                    ) : (
                        <Link className={"nav-link"} to={`/${urls.authentication}`}>Sign In</Link>
                    )
                }
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
        </nav>
    )
}