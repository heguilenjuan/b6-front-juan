import { AxiosResponse } from "axios";

//estructura de como van a ser las consultas
export interface AxiosCall<T> {
    call: Promise<AxiosResponse<T>>;
    controller?: AbortController;
}
