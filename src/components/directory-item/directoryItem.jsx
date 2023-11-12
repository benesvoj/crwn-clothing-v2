import './directoryItem.styles'
import {
    BackgroundImage,
    BodyContainer,
    DirectoryItemContainer,
} from "./directoryItem.styles";
import {useNavigate} from "react-router-dom";

export const DirectoryItem = ({category}) => {
    const {imageUrl, title, routeName} = category
    const navigate = useNavigate()

    const onNavigateHandler = () => {
        navigate(`/${routeName}`)
    }

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <BodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </BodyContainer>
        </DirectoryItemContainer>
    )
}