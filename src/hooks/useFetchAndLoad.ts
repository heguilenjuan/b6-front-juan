import { AxiosCall } from "@/models/axios-call.model";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

//hook que maneja las consultas con loading y cancelacion
//se le pasa la consulta y el loading se maneja desde el hook
//se le pasa el controller para poder cancelar la consulta si es necesario

const useFetchAndLoad = () => {
    const [loading, setLoading] = useState(false);
    let controller: AbortController;

    const callEndpoint = async (axiosCall: AxiosCall<any>) => {

        if (axiosCall.controller) controller = axiosCall.controller;
        setLoading(true);

        let result = {} as AxiosResponse<any>;
        try {
            result = await axiosCall.call;
        } catch (error: any) {
            setLoading(false);
            throw error;
        }
        setLoading(false);
        return result;
    }

    const cancelEndpoint = () => {
        setLoading(false);
        controller && controller.abort();
    };

    useEffect(() => {
        return () => {
            cancelEndpoint();
        };
    }, []);

    return { loading, callEndpoint };

};

export default useFetchAndLoad;