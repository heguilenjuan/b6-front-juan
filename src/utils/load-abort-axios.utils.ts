//Elimina las peticiones que no se han completado cuando el componente se desmonta
// o se vuelve a cargar la página 
export const loadAbort = () => {
    const controller = new AbortController();
    return controller;
}