import {Link} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import './navigation.styles.scss'

export const Navigation = () => {
    return (
        <nav className={'nav'}>
            <Link to={'/'} className={'logo-container'}>
                <CrownLogo className={'nav-logo'} />
            </Link>
            <div className={"nav-links"}>
                <Link className={"nav-link"} to={"/shop"}>SHOP</Link>
                <Link className={"nav-link"} to={"/sign-in"}>Sign In</Link>
            </div>
        </nav>
    )
}