import { Promotion } from "@/models/promotion.model"

export const adaptPromotionFromBackend = (promotion: any) => {
    return {
        id: promotion.id,
        name: promotion.name,
        status: promotion.status,
        imageUrl: promotion.imageUrl,
    }
}

export const adaptPromotionToBackend = (promotion: Promotion) => {
    return {
        name: promotion.name,
        imageUrl: promotion.imageUrl,
    }
}