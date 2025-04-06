import { Product } from "@/models/product.model";


//adapta los datos del backend a los necesarios en el frontend
export const adaptProductFromBackend = (backendProduct: any): Product => ({
    id: backendProduct.id,
    name: backendProduct.name,
    status: backendProduct.status,
    imageUrl: backendProduct.imageUrl,
    price: {
        amount: backendProduct.price.amount,
        currency: backendProduct.price.currency,
    },
    categoryId: backendProduct.categoryId,
    description: backendProduct.description,
    externalReference: backendProduct.externalReference,
    details: {
        ingredients: backendProduct.details.ingredients.map((ingredient: any) => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
            unir: ingredient.unit,
        }))
    }
})


//adapta los datos del frontend a los necesarios en el backend
export const adaptProductToBackend = (frontendProduct: Product) => ({
    name: frontendProduct.name,
    imageUrl: frontendProduct.imageUrl,
    price: {
        amount: frontendProduct.price.amount,
        currency: frontendProduct.price.currency
    },
    categoryId: frontendProduct.categoryId,
    externalReference: frontendProduct.externalReference,
    description: frontendProduct.description,
    details: {
        ingredients: frontendProduct.details.ingredients.map((ingredient: any) => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit
        }))
    }
});
