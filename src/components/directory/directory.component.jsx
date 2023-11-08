import {CategoryItem} from "../category-item/category-item.components";
import './directory.styles.scss'

export const Directory = ({categories}) => {
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    )
}