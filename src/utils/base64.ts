// este script es creado para pasar los archivos (imagenes) a base 64 previo a enviar la info
export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader() //constructor de js para manipular archivos

        reader.onload = () => {
            const result = reader.result; //obtengo el resultado de la lectura
            if (typeof result === "string") {
                resolve(result)
            } else {
                reject(new Error("No se pudo convrtir el archivo a base64"));
            }

            reader.onerror = () => {
                reject(new Error("Error al leer el archivo"))
            };

            reader.readAsDataURL(file);
        }
    })
}

//como es una promesa se usa on await