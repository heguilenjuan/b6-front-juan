import { Product } from "@/models/product.model";
import '../styles/productCard.scss'
import { Link } from "react-router-dom";
type CardProps = {
  products: Product[];
};


const ProductCard = ({ products }: CardProps) => {
  return (
    <>
      {products.map((product: any) => (
        <Link className="card" key={`producto-b6-${product.name}`} to={`/product/details/${product.id}`}>
          <img src={product.imageUrl} alt={product.name} className="card__image" />
          <div className="card__content">
            <h3 className="card__title">{product.name}</h3>
            <p className="card__description">{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;