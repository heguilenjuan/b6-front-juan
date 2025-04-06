
import '../styles/category.scss'
type Categories = {
    id: string | number;
    imgCategory: string;
    title: string;
};

interface CategoriesProps {
    categories: Categories[];
    onSelectCategory: (categoryTitle: string) => void;
}

const CategoryComponent = ({ categories, onSelectCategory }: CategoriesProps) => {
    return (
        <div className="slider-container">
            {categories.map((category) => (
                <div className="slide-item" key={category.id}>
                    <div
                        key={category.id}
                        onClick={() => onSelectCategory(category.title)}
                    >
                        <div className="content-link">
                            <img src={category.imgCategory} alt={category.title} />
                            <p>{category.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryComponent;
