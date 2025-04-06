export interface Category {
    id: string;
    name: string;
    status: string;
    imageUrl: string;
    children: Category[];
}