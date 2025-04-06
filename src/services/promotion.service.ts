import { adaptPromotionFromBackend, adaptPromotionToBackend } from "@/adapters/promotion.adapter";
import { Promotion } from "@/models/promotion.model";
import { BACKEND_URL, TOKEN_FRONT, TOKEN_SESSION } from "@/utils/constants";
import { loadAbort } from "@/utils/load-abort-axios.utils";
import axios from "axios";

interface GetAllPromotionsProps {
    search: string;
    page?: number;
    limit?: number;
    status: "active" | "inactive";
}

const URL = `${BACKEND_URL}/api/promotion`;

//GET PROMOTIONS
export const getAllPromotions = ({ page = 0, limit = 5, status = "active" }: GetAllPromotionsProps) => {
    const controller = loadAbort();

    let query = `search?limit=${limit}&offset=${(page - 1) * limit}&status=${status}`;

    return {
        call: axios.get(`${BACKEND_URL}/api/promotions/${query}`, {
            headers: { Authorization: `Baerer ${TOKEN_FRONT}` },
            signal: controller.signal
        }).then((res) => res.data.results.map(adaptPromotionFromBackend)),
        controller
    }
}

//GET PROMOTION
export const getPromotion = (id: string) => {
    const controller = loadAbort();
    return {
        call: axios.get(`${URL}/${id}`,
            {
                headers: { Authorization: `Baerer ${TOKEN_FRONT}` },
                signal: controller.signal
            }).then((res) => { adaptPromotionFromBackend(res.data) }),
        controller
    }
}

//PUT
export const putPromotions = (id: string, updatePromotion: Promotion) => {
    const controller = loadAbort();
    return {
        call: axios.put(`${URL}/${id}`, adaptPromotionToBackend(updatePromotion), {
            headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
            signal: controller.signal
        }),
        controller
    }
}
//POST
export const postPromotions = (newPromotion: Promotion) => {
    const controller = loadAbort();
    return {
        call: axios.post(`${URL}`, adaptPromotionToBackend(newPromotion), {
            headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
            signal: controller.signal
        }),
        controller
    }
}

//DELETE
export const deletePromotions = (id: string) => {
    const controller = loadAbort();
    return {
        call: axios.delete(`${URL}/${id}`, {
            headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
            signal: controller.signal
        }),
        controller
    }
}