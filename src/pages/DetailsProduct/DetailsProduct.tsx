/* import { useParams } from 'react-router-dom' */
import Layout from '../Layout/Layout';
/* import useIsMobile from '@/hooks/useIsMobile'; */

import './styles/detailsProduct.scss'
import image from "@/assets/images/product/WEBAPP B6-Menu-MINIBOX BURGER QUESO.jpg"
/* import { useState, useEffect } from 'react';
 */
const DetailsProduct = () => {
/*     const { productId } = useParams();

    const isMobile = useIsMobile(); */

    /*     const [product, setProduct] = useState(null);
        //una vez tenga el id, del producto deberia hacer el get, y guardarlo en el estado
        useEffect(() => {
    
        }, [productId]) */

    const productoData = {
        id: "pro-12121",
        name: "Classic L&T",
        version: 0,
        status: "active",
        imageUrl: image,
        price: {
            amount: 15000,
            currency: "ARS"
        },
        categoryId: "cat-123",
        externalReference: "xxxxxx",
        description: "Burger de carne con Lechuga, Tomate, Cheddar y Mayonesa en pan con sésamo. Con Gaseosa y Papas Medianas.",
        details: {
            ingredients: [
                { name: "Carne", quantity: 120, unit: "gr" },
                { name: "Lechuga", quantity: 1, unit: "hoja" },
                { name: "Tomate", quantity: 2, unit: "rodajas" },
                { name: "Cheddar", quantity: 1, unit: "feta" },
                { name: "Mayonesa", quantity: 20, unit: "gr" }
            ]
        }
    }

    return (
        <Layout>
            <section className="detail-product">
                <div>
                    <img src={productoData.imageUrl} alt={`Imagen del producto ${productoData.name}`} className="detail-product__image" />
                </div>

                <div className="detail-product__content">
                    <h2>{productoData.name}</h2>
                    <p>{productoData.description}</p>

                    {/*   <div>
                        <h3>Ingredientes:</h3>
                        <ul>
                            {productoData.details.ingredients.map((ingredient, idx) => (
                                <li key={idx}>
                                    {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    <span className="price">${productoData.price.amount.toLocaleString("es-AR")} {productoData.price.currency}</span>
                </div>
            </section>
        </Layout>
    )
}

export default DetailsProduct