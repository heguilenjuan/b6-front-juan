import { useState } from "react"
import { useCouponsContext } from "../context/couponsContext";
import useIsMobile from "@/hooks/useIsMobile";
import StarIcon from '@mui/icons-material/Star';
import heartSVG from '@/assets/icons/heartSvg.svg';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import '../styles/CardCoupon.scss'

const CardCoupon = ({ coupon }: any) => {
    const [couponActivo, setCouponActivo] = useState<string | null>(null);

    const { selectedCoupon } = useCouponsContext();
    const isMobile = useIsMobile();

    const isSelected = selectedCoupon?.id === coupon.id;
    const mostrarBoton = isMobile ? couponActivo === coupon.id.toString() : isSelected;
    /*    const handleObtenerCupon = (id: any) => {
           // Acá hacés lo que quieras con el ID: redirigir, mostrar modal, etc.
       } */


    const handleClickCard = () => {
        if (isMobile) {
            setCouponActivo(prev => (prev === coupon.id.toString() ? null : coupon.id.toString()));
        }
    };
    return (
        <>
            <article
                role="button"
                aria-expanded={mostrarBoton ? "true" : "false"}
                className="coupon"
                tabIndex={0}
                onClick={handleClickCard}
            >
                {/* imagen */}
                <img
                    src={coupon.conditions.ids[0]}
                    alt={`Imagen del cupón ${coupon.name}`}
                    className="coupon-image" />

                {/* btn mas o menos en mobile */}
                {isMobile ?
                    mostrarBoton ?
                        <ExpandLessIcon className="coupon-icon-mobile" aria-label="Ocultar detalles" />
                        :
                        <ExpandMoreIcon className="coupon-icon-mobile" aria-label="Mostrar detalles" />

                    :
                    null}

                {/* descuentos */}
                <div className="text-discount">
                    <span>{coupon.discount.value} %</span>
                    <span>OFF</span>
                </div>

                {/* lineas de troquel */}
                <div className='line-dotted top'></div>
                <div className='line-dotted bottom'></div>

                <h3 className="coupon-name" id={`coupon-title-${coupon.id}`}>
                    <StarIcon className="star-icon" aria-hidden="true" />
                    {coupon.name}
                    <StarIcon className="star-icon" aria-hidden="true" />
                </h3>

                {/* heart */}
                <div className="img-heart">
                    <img
                        src={heartSVG}
                        alt="Imagen de corazon de big six"
                    />
                </div>

                <div className='slash' aria-hidden="true"></div>
            </article>
            {mostrarBoton && (
                <section
                    className="btn-coupon-box"
                    key={`${coupon.id}-details`}
                    aria-live="polite"
                >
                    <p className='text-coupon'>
                        {coupon.description}
                    </p>
                    <button
                        /*  onClick={() => handleObtenerCupon(coupon.id)} */
                        className="btn-coupon"
                    >
                        Obtener cupón
                    </button>
                </section>
            )}
        </>

    )
}
export default CardCoupon