import { AxiosResponse } from "axios";
import { useEffect } from "react";

/// Este hook se encarga de manejar las consultas asincronas
export const useAsync = (
    asyncFn: () => Promise<AxiosResponse<any, any>>,
    successFunction: Function,
    returnFunction: Function,
    dependencies: any[] = [],
) => {
    useEffect(() => {
        let isActive = true;
        asyncFn().then((result) => {
            if (isActive) {
                successFunction(result.data);
            }
        });
        return () => {
            returnFunction && returnFunction();
            isActive = false;
        };
    }, dependencies);

}