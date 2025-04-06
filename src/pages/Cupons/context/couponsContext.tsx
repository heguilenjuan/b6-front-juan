// context/CouponsContext.tsx
import { Coupon } from "@/models/coupon.model";
import { createContext, ReactNode, useContext, useState } from "react";



type CouponsContextType = {
  coupons: Coupon[];
  setCoupons: (coupons: Coupon[]) => void;
  selectedCoupon: Coupon | null;
  selectCoupon: (coupon: Coupon) => void;
  openCouponModal: () => void;
};

const CouponsContext = createContext<CouponsContextType | undefined>(undefined);

export const CouponsProvider = ({ children }: { children: ReactNode }) => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  const selectCoupon = (coupon: Coupon) => {
    setSelectedCoupon(coupon);
  };

  const openCouponModal = () => {
    // lógica para abrir modal (puede ser un estado global o disparador de algún UI)
  };

  return (
    <CouponsContext.Provider
      value={{ coupons, setCoupons, selectedCoupon, selectCoupon, openCouponModal }}
    >
      {children}
    </CouponsContext.Provider>
  );
};

export const useCouponsContext = () => {
  const context = useContext(CouponsContext);
  if (!context) throw new Error("useCouponsContext debe usarse dentro de CouponsProvider");
  return context;
};
