import axios from "axios";
import { loadAbort } from "@/utils/load-abort-axios.utils"
import { BACKEND_URL, TOKEN_FRONT, TOKEN_SESSION } from "@/utils/constants";

import { Product } from "../models/product.model";
import { adaptProductFromBackend, adaptProductToBackend } from "@/adapters/product.adapter";

const URL = `${BACKEND_URL}/api/product`;

interface GetAllProductsProps {
    page?: number;
    limit?: number;
    category?: string;
}

//el signal es lo que tiene que escuchar para que la llamada se detenga


//GET-ALL
export const getAllProduct = ({ page = 1, limit = 10, category }: GetAllProductsProps) => {
    const controller = loadAbort();

    let query = `search?limit=${limit}&offset=${(page - 1) * limit}`;
    if (category) query += `&category_id=${category}`;

    return {
        call: axios.get(`${URL}/${query}`,
            {
                headers: { Authorization: `Bearer ${TOKEN_FRONT}` },
                signal: controller.signal
            }).then((res) => res.data.results.map(adaptProductFromBackend)), //aplica adaptador a cada uno de los productos
        controller
    }
}
//GET
export const getProduct = (id: string) => {
    const controller = loadAbort();
    return {
        call: axios.get(`${URL}/${id}`,
            {
                headers: { Authorization: `Bearer ${TOKEN_FRONT}` },
                signal: controller.signal
            }).then((res) => { adaptProductFromBackend(res.data) }),
        controller
    }
}

//PUT
export const putProduct = (id: string, updateProduct: Product) => {
    const controller = loadAbort();
    return {
        call: axios.put(`${URL}/${id}`, adaptProductToBackend(updateProduct),
            {
                headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
                signal: controller.signal
            }),
        controller
    }
}

//POST
export const postProduct = (newProduct: Product) => {
    const controller = loadAbort();
    return {
        call: axios.post(`${URL}`, adaptProductToBackend(newProduct),
            {
                headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
                signal: controller.signal
            }),
        controller
    }
}

//DELETE
export const deleteProduct = (id: string) => {
    const controller = loadAbort();
    return {
        call: axios.delete(`${URL}/${id}`, {
            headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
            signal: controller.signal
        }),
        controller
    }
}