export interface Product {
    id: string;
    name: string;
    status: string;
    imageUrl: string;
    price: {
        amount: number,
        currency: string,
    },
    categoryId: string;
    description: string;
    externalReference: string;
    details: {
        ingredients: { name: string; quantity: number; unit: string; }[];
    };
}