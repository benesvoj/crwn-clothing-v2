import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import {LogoContainer, NavigationContainer, NavLink, NavLinksContainer} from "./navigation.styles";

import {urls} from "../../utils/urls";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {CartIcon} from "../cartIcon/cartIcon";
import {CartDropdown} from "../cartDropdown/cartDropdown";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectIsCartOpen} from "../../store/cart/cart.selector";

export const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

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