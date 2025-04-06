import { Coupon } from "@/models/coupon.model";
import imagen1 from "@/assets/images/product/WEBAPP B6-Menu- PAMPEANA.jpg";
import imagen2 from "@/assets/images/product/WEBAPP B6-Menu-OLIVIA.jpg";
import imagen3 from "@/assets/images/product/WEBAPP B6-Menu-CLASSIC LT.jpg";

export const couponsData: Coupon[] = [
  {
    id: "1",
    name: "CLASSIC LT",
    status: "active",
    externalReference: "promo-001",
    description: "20% OFF en el combo CLASSIC LT",
    discount: {
      value: 20,
      type: {
        unit: "percentage",
        currency: "ARS",
      },
    },
    conditions: {
      applies_to: "products",
      ids: [imagen3],
      date_range: {
        has_expiration: true,
        start_date: new Date("2025-04-01T00:00:00Z"),
        end_date: new Date("2025-04-30T23:59:59Z"),
      },
      usage: {
        max_uses: 100,
        count_uses: 12,
        user_by: [],
      },
    },
    code: "CLASSIC20",
  },
  {
    id: "2",
    name: "PAMPEANA",
    status: "active",
    externalReference: "promo-002",
    description: "25% OFF en la BESTIA con bebida",
    discount: {
      value: 25,
      type: {
        unit: "percentage",
        currency: "ARS",
      },
    },
    conditions: {
      applies_to: "products",
      ids: [imagen1],
      date_range: {
        has_expiration: true,
        start_date: new Date("2025-04-01T00:00:00Z"),
        end_date: new Date("2025-04-20T23:59:59Z"),
      },
      usage: {
        max_uses: 50,
        count_uses: 7,
        user_by: [],
      },
    },
    code: "BESTIA25",
  },
  {
    id: "3",
    name: "2x1 BAHIENSE",
    status: "active",
    externalReference: "promo-003",
    description: "2x1 en OLIVIA",
    discount: {
      value: 50,
      type: {
        unit: "percentage",
        currency: "ARS",
      },
    },
    conditions: {
      applies_to: "products",
      ids: [imagen2],
      date_range: {
        has_expiration: true,
        start_date: new Date("2025-04-01T00:00:00Z"),
        end_date: new Date("2025-04-15T23:59:59Z"),
      },
      usage: {
        max_uses: 200,
        count_uses: 89,
        user_by: [],
      },
    },
    code: "YOGUR2X1",
  },
];