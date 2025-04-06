import { adaptCouponFromBackend } from "@/adapters/coupon.adapter"
import { BACKEND_URL, TOKEN_FRONT } from "@/utils/constants"
import { loadAbort } from "@/utils/load-abort-axios.utils"
import axios from "axios"

//GET
export const getCoupon = (id: string) => {
    const controller = loadAbort()
    return {
        call: axios.get(`${BACKEND_URL}/${id}`, {
            signal: controller.signal,
            headers: {
                Authorization: `Bearer ${TOKEN_FRONT}`
            }
        }).then((res) => { adaptCouponFromBackend(res.data) }),
        controller
    }
}

//GET-ALL veremos


//POST
export const postCoupon = (newCoupon: any) => {
    const controller = loadAbort()
    return {
        call: axios.post(`${BACKEND_URL}`,
            newCoupon,
            {
                signal: controller.signal,
                headers: {
                    Authorization: `Bearer ${TOKEN_FRONT}`
                }
            }),
        controller
    }
}

//PUT
export const putCoupon = (id: string, updateCoupon: any) => {
    const controller = loadAbort()
    return {
        call: axios.put(`${BACKEND_URL}/${id}`,
            updateCoupon,
            {
                signal: controller.signal,
                headers: {
                    Authorization: `Bearer ${TOKEN_FRONT}`
                }
            }),
        controller
    }
}

//DELETE
export const deleteCoupon = (id: string) => {
    const controller = loadAbort()
    return {
        call: axios.delete(`${BACKEND_URL}/${id}`, {
            signal: controller.signal,
            headers: {
                Authorization: `Bearer ${TOKEN_FRONT}`
            }
        }),
        controller
    }
}