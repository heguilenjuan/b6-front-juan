import '../../styles/CouponMobile.scss';
import CardCoupon from '../CardCoupon';
import { useCouponsContext } from '../../context/couponsContext';
import { useEffect } from 'react';
import { couponsData } from '../../utils/CuponSimulacro';

const CuponsMobile = () => {
  const { coupons, setCoupons, selectCoupon } = useCouponsContext();
  useEffect(() => {
    setCoupons(couponsData);
  }, []);
  return (
    <section className='coupons-mobile'>
      <div>
        <h1>
          Tremendos Off!
        </h1>
      </div>
      <div className='coupons'>
        {coupons ? coupons.map((coupon) => (
          <div key={coupon.id} onClick={() => selectCoupon(coupon)}>
            <CardCoupon coupon={coupon} />
          </div>

        )) : null}
      </div>
    </section >
  );
};

export default CuponsMobile;
