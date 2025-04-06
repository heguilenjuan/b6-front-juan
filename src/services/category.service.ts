import { Category } from "@/models/category.model";
import { loadAbort } from "@/utils/load-abort-axios.utils";
import axios from "axios";
import { BACKEND_URL, TOKEN_FRONT, TOKEN_SESSION } from "@/utils/constants";
import { adaptCategoryFromBackend, adaptCategoryToBackend } from "@/adapters/category.adapter";

const URL = `${BACKEND_URL}/api/category`

//GET
export const getCategory = (id: string) => {
    const controller = loadAbort();
    return {
        call: axios.get(`${URL}/${id}`,
            {
                headers: { Authorization: `Bearer ${TOKEN_FRONT}` },
                signal: controller.signal
            }).then((res) => adaptCategoryFromBackend(res.data)),
        controller
    }
}

//GET-ALL
export const getAllCategory = () => {
    const controller = loadAbort()

    return {
        call: axios.get(URL, {
            headers: { Authorization: `Bearer ${TOKEN_FRONT}` },
            signal: controller.signal
        }).then((res) => res.data.map(adaptCategoryFromBackend)),
        controller
    }
}

//POST
export const postCategory = (newCategory: Category) => {
    const controller = loadAbort()

    return {
        call: axios.post(URL,
            adaptCategoryToBackend(newCategory),
            {
                headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
                signal: controller.signal
            }),
        controller
    }
}

//PUT
export const putCategory = (id: string, updateCategory: Category) => {
    const controller = loadAbort()

    return {
        call: axios.put(`${URL}/${id}`,
            adaptCategoryToBackend(updateCategory),
            {
                headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
                signal: controller.signal
            }
        ),
        controller
    }
}

//DELETE
export const deleteCategory = (id: string) => {
    const controller = loadAbort()
    return {
        call: axios.delete(`${URL}/${id}`, {
            headers: { Authorization: `Bearer ${TOKEN_SESSION}` },
            signal: controller.signal
        }),
        controller
    }
}
