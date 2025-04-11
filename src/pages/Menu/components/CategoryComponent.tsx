
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
        <nav className="slider-container">
            {categories.map((category) => (
                <div className="slide-item" key={`category-${category.id}`}>
                    <button
                        onClick={() => onSelectCategory(category.title)}
                        aria-label={`Seleccionar categoria ${category.title}`}
                    >
                        <div className="content-link">
                            <img src={category.imgCategory} alt={`Imagen de la categoria ${category.title}`} />
                            <p>{category.title}</p>
                        </div>
                    </button>
                </div>
            ))}
        </nav>
    );
};

export default CategoryComponent;
