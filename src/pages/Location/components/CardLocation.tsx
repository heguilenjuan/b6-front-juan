//Styles
import "../styles/cardlocation.scss";
import { CardLocationProps } from "../Location";



const CardLocation: React.FC<CardLocationProps> = ({ name, location, image, onClick }) => {
    return (
        <button
            className="card-tab"
            style={{ backgroundImage: `url(${image})` }}
            aria-label={`Ver ubicación de ${name}`}
            onClick={onClick}
        >
            <div className="card-tab__overlay"></div>
            <div className="card-tab__content">
                <h2>{name}</h2>
                <p>{location}</p>
                <span className="card-tab__subtext">Mostrar en el mapa</span>
            </div>
        </button>
    );
};

export default CardLocation;
