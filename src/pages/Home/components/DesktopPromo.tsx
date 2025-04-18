import { Promotion } from "@/models/promotion.model";
import "../styles/destkPromo.scss";

interface DestktopPromoProps {
  data: Promotion[];
}

const DesktopPromo = ({ data }: DestktopPromoProps) => {
  return (
    <section
      className="promotions"
      aria-labelledby="promo-title"
    >
      <h2
        id="promo-title"
        className="promotions__title">
        Big Promos
      </h2>
      <div className="promotions__grid">
        {data.map((promo, index) => {
          // Aplicamos clases automáticas según la posición en el array
          const cardClass =
            index % 3 === 2
              ? "promotion-card--wide"
              : index % 3 === 1
                ? "promotion-card--highlighted"
                : "";

          return (
            <div key={`${promo.id}-promo`} className={`promotion-card ${cardClass}`}>
              <img
                src={promo.imageUrl}
                alt={`imagen de promocion ${promo.name}`}
                loading="lazy" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DesktopPromo;
