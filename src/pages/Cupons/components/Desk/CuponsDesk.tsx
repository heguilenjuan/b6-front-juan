import CardCoupon from "../CardCoupon"
import '../../styles/CouponDestk.scss'
import { useEffect } from 'react';
import { useCouponsContext } from "../../context/couponsContext";
import { couponsData } from "../../utils/CuponSimulacro";


const CuponsDesk = () => {
  const { coupons, setCoupons, selectCoupon, selectedCoupon, openCouponModal } = useCouponsContext();

  //aca deberia hacer la consulta a la base de datos
  useEffect(() => {
    setCoupons(couponsData)
    if (couponsData.length > 0) {
      selectCoupon(couponsData[0]);
      openCouponModal();
    }
  }, [])

  return (
    <section className='coupons-desk'>
      <div className='coupons-desk__header'>
        <h1>Tremendos off!</h1>
      </div>
      <div className='coupons-desk__content'>
        <div className="coupons-desk__content__left">
          <div className="coupons-desk__content__left__title">
            <h2 className="cupones-title">🎁 Cupones Disponibles</h2>
          </div>
          <div className="coupons-list">
            {coupons && coupons.map((coupon) => (
              <div
                key={`cupon-${coupon.id}`}
                className="coupon-item"
                onClick={() => {
                  selectCoupon(coupon);
                  openCouponModal(); // en desktop lo abrimos automáticamente
                }}
              >
                <h4>{coupon.name}</h4>
                <span>{coupon.discount.value}{coupon.discount.type.unit === "percentage" ? "%" : null}OFF</span>
              </div>
            ))}
          </div>
        </div>
        <div className="coupons-desk__content__right">
          {selectedCoupon && <CardCoupon coupon={selectedCoupon} />}
        </div>
      </div>

    </section >
  )
}

export default CuponsDesk