import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import {LogoContainer, NavigationContainer, NavLink, NavLinksContainer} from "./navigation.styles";

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
        <NavigationContainer>
            <LogoContainer to={urls.home}>
                <CrownLogo className={'nav-logo'}/>
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to={`/${urls.shop}`}>SHOP</NavLink>
                {
                    currentUser ? (
                        <NavLink as={'span'} onClick={signOutUser}>SING OUT</NavLink>
                    ) : (
                        <NavLink to={`/${urls.authentication}`}>Sign In</NavLink>
                    )
                }
                <CartIcon/>
            </NavLinksContainer>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
    )
}