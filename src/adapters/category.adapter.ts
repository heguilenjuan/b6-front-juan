import { Category } from "@/models/category.model"

export const adaptCategoryFromBackend = (category: any) => {
    return {
        id: category.id,
        name: category.name,
        status: category.status,
        imageUrl: category.imageUrl,
        children: category.children.map((child: any) => ({
            id: child.id,
            name: child.name,
            status: child.status,
            imageUrl: child.imageUrl
        }))
    }
}


export const adaptCategoryToBackend = (category: Category) => {
    return {
        name: category.name,
        imageUrl: category.imageUrl,
        children: category.children.map((cat: any) => {
            id: cat.id
        })
    }
}