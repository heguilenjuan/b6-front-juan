//componentes
import Layout from '../Layout/Layout'
import CategoryComponent from './components/CategoryComponent'

import fastfood from '@/assets/images/menu/hamburguesa.png'
import veggie from '@/assets/images/menu/veggie.png'
import cafeteria from '@/assets/images/menu/cafeteria.png'
import postres from '@/assets/images/menu/postres.png'
import minibox from '@/assets/images/menu/minibox.png' 



import producto1 from '@/assets/images/product/WEBAPP B6-Menu- PAMPEANA.jpg';
import producto2 from '@/assets/images/product/WEBAPP B6-Menu-AFFOGATO.jpg';
import producto3 from '@/assets/images/product/WEBAPP B6-Menu-AMERICANO.jpg';
import producto4 from '@/assets/images/product/WEBAPP B6-Menu-AROS CEBOLLA.jpg';
import producto5 from '@/assets/images/product/WEBAPP B6-Menu-AVOCADO.jpg'
import producto6 from '@/assets/images/product/WEBAPP B6-Menu-BESTIA.jpg';

import { useState } from 'react'
import ProductCard from './components/ProductCard'

import './styles/menu.scss'

const categories = [
    {
        id: 1,
        imgCategory: fastfood,
        title: 'Fast Food'
    },
    {
        id: 2,
        imgCategory: veggie,
        title: 'Veggie Life'
    },
    {
        id: 3,
        imgCategory: cafeteria,
        title: 'Cafetería'
    },
    {
        id: 4,
        imgCategory: postres,
        title: 'Postres'
    },
    {
        id: 5,
        imgCategory: minibox,
        title: 'Mini Box'
    }
]
const products = [
    {
        id: "1",
        name: "PAMPEANA",
        status: "available",
        imageUrl: producto1,
        price: {
            amount: 1200,
            currency: "ARS",
        },
        categoryId: "fast-food",
        description: "Delicioso combo mediano con ingredientes seleccionados.",
        externalReference: "EXT-001",
        details: {
            ingredients: [
                { name: "Carne", quantity: 1, unit: "unidad" },
                { name: "Pan", quantity: 1, unit: "unidad" },
                { name: "Queso", quantity: 1, unit: "feta" }
            ],
        },
    },
    {
        id: "2",
        name: "AFFOGATO",
        status: "available",
        imageUrl: producto2,
        price: {
            amount: 800,
            currency: "ARS",
        },
        categoryId: "cafeteria",
        description: "Café con helado, una experiencia única.",
        externalReference: "EXT-002",
        details: {
            ingredients: [
                { name: "Café", quantity: 1, unit: "shot" },
                { name: "Helado", quantity: 1, unit: "bola" }
            ],
        },
    },
    {
        id: "3",
        name: "AMERICANO",
        status: "available",
        imageUrl: producto3,
        price: {
            amount: 600,
            currency: "ARS",
        },
        categoryId: "cafeteria",
        description: "Café negro, intenso y aromático.",
        externalReference: "EXT-003",
        details: {
            ingredients: [
                { name: "Café", quantity: 1, unit: "shot" },
                { name: "Agua", quantity: 150, unit: "ml" }
            ],
        },
    },
    {
        id: "4",
        name: "AROS CEBOLLA",
        status: "available",
        imageUrl: producto4,
        price: {
            amount: 900,
            currency: "ARS",
        },
        categoryId: "fast-food",
        description: "Crujientes aros de cebolla fritos.",
        externalReference: "EXT-004",
        details: {
            ingredients: [
                { name: "Cebolla", quantity: 1, unit: "unidad" },
                { name: "Harina", quantity: 100, unit: "gr" },
                { name: "Aceite", quantity: 200, unit: "ml" }
            ],
        },
    },
    {
        id: "5",
        name: "AVOCADO",
        status: "available",
        imageUrl: producto5,
        price: {
            amount: 1100,
            currency: "ARS",
        },
        categoryId: "veggie-life",
        description: "Combo saludable con palta y ingredientes frescos.",
        externalReference: "EXT-005",
        details: {
            ingredients: [
                { name: "Palta", quantity: 1, unit: "unidad" },
                { name: "Pan integral", quantity: 1, unit: "unidad" }
            ],
        },
    },
    {
        id: "6",
        name: "BESTIA",
        status: "available",
        imageUrl: producto6,
        price: {
            amount: 1500,
            currency: "ARS",
        },
        categoryId: "fast-food",
        description: "Combo potente para los más hambrientos.",
        externalReference: "EXT-006",
        details: {
            ingredients: [
                { name: "Doble carne", quantity: 2, unit: "unidad" },
                { name: "Queso cheddar", quantity: 2, unit: "feta" },
                { name: "Papas fritas", quantity: 200, unit: "gr" }
            ],
        },
    }
];

const Menu = () => {

    const [, setSelectedCategory] = useState<string | null>(null);


    return (
        <Layout>
            <section className='category'>
                <CategoryComponent categories={categories} onSelectCategory={setSelectedCategory} />
            </section>
            <section className='products'>
                <ProductCard products={products} />

            </section>
        </Layout>
    )
}

export default Menu


