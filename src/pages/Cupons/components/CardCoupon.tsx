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
            <div className="coupon" onClick={handleClickCard}>
                {/* imagen */}
                <img src={coupon.conditions.ids[0]} alt="Cupón" className="coupon-image" />

                {/* btn mas o menos en mobile */}
                {isMobile ?
                    mostrarBoton ?
                        <ExpandLessIcon className="coupon-icon-mobile"/>
                        :
                        <ExpandMoreIcon className="coupon-icon-mobile" />

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

                <div className="coupon-name">
                    <StarIcon className="star-icon" />
                    {coupon.name}
                    <StarIcon className="star-icon" />
                </div>

                {/* heart */}
                <div className="img-heart">
                    <img src={heartSVG} alt="Favorito" />
                </div>

                <div className='slash'></div>
            </div>
            {mostrarBoton && (
                <div className="btn-coupon-box" key={`${coupon.id}-details`}>
                    <span className='text-coupon'>
                        {coupon.description}
                    </span>
                    <button
                        /*  onClick={() => handleObtenerCupon(coupon.id)} */
                        className="btn-coupon"
                    >
                        Obtener cupón
                    </button>
                </div>
            )}
        </>

    )
}
export default CardCoupon