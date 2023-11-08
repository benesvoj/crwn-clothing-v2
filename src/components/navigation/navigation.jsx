import {Link} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import './navigation.styles.scss'
import {urls} from "../../utils/urls";

export const Navigation = () => {
    return (
        <nav className={'nav'}>
            <Link to={urls.home} className={'logo-container'}>
                <CrownLogo className={'nav-logo'} />
            </Link>
            <div className={"nav-links"}>
                <Link className={"nav-link"} to={`/${urls.shop}`}>SHOP</Link>
                <Link className={"nav-link"} to={`/${urls.authentication}`}>Sign In</Link>
            </div>
        </nav>
    )
}