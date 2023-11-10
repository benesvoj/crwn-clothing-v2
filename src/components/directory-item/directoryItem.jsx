import './directoryItem.styles'
import {
    BackgroundImage,
    BodyContainer,
    DirectoryItemContainer,
} from "./directoryItem.styles";

export const DirectoryItem = ({category}) => {
    const {imageUrl, title} = category

    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <BodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </BodyContainer>
        </DirectoryItemContainer>
    )
}