export const adaptCouponFromBackend = (coupon: any) => {
    return {
        id: coupon.id,
        name: coupon.name,
        status: coupon.status,
        discount: {
            value: coupon.discount.value,
            type: {
                unit: coupon.discount.type.unit,
                currency: coupon.discount.type.currency,
            }
        },
        conditions: {
            ids: coupon.conditions.ids.map((id: any) => id),
        },
        code: coupon.code

    };
}