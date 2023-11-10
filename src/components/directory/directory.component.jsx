import {DirectoryItem} from "../directory-item/directoryItem";
import styled from "styled-components";

export const Directory = ({categories}) => {
    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <DirectoryItem category={category} key={category.id} />
            ))}
        </CategoriesContainer>
    )
}

const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`