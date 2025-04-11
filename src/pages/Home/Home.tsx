//Components
import Carousel from '@/components/Carousel';
import Layout from '../Layout/Layout';

//imagenes
import banner1 from '@/assets/images/home/WEBAPP-Banner Inicio-Farmer.jpg';
import banner2 from '@/assets/images/home/WEBAPP-Banner Inicio-Cheddy.jpg';
import banner3 from '@/assets/images/home/WEBAPP-Banner Inicio-Bubba.jpg'

//Imagenes
import promo1 from '@/assets/images/home/WEBAPPP PROMO-50_OFF.jpg';
import promo2 from '@/assets/images/home/WEBAPPP PROMO-BAHIENSE SERENISIMA.jpg';
import promo3 from '@/assets/images/home/WEBAPPP PROMO-METABOLON.jpg';
import promo4 from '@/assets/images/home/WEBAPPP PROMO-VEGGIE FRUGINA.jpg';
import useIsMobile from '@/hooks/useIsMobile';
import DesktopPromo from './components/DesktopPromo';


const Home = () => {
    //hook para determinar el tamaño de la pantalla
    const isMobile = useIsMobile()

    const banners = [
        {
            id: "1",
            name: "Promo santander libertadores",
            status: "activate",
            imageUrl: banner1
        },
        {
            id: "6",
            name: "Promo santander libertadores",
            status: "activate",
            imageUrl: banner2
        },
        {
            id: "5",
            name: "Promo santander libertadores",
            status: "activate",
            imageUrl: banner3
        },
        {
            id: "4",
            name: "Promo santander libertadores",
            status: "activate",
            imageUrl: promo4
        }
    ]

    const promos = [
        {
            id: "10",
            name: "Promo santander libertadores",
            status: "activate",
            imageUrl: promo1
        },
        {
            id: "11",
            name: "Promo santander libertadores",
            status: "activate",
            imageUrl: promo3
        },
        {
            id: "12",
            name: "Promo santander libertadores",
            status: "activate",
            imageUrl: promo2
        },


    ]

    return (

        <Layout >
            <Carousel data={banners} isArrow={false} isIndicator={true} />
            {
                isMobile ?
                    <section aria-label='Mobile promos'>
                        <Carousel 
                        data={promos} 
                        isArrow={true} 
                        isIndicator={false} 
                        carouselTitle='Big Promos!' 
                        isAutoPlay={false} />
                    </section>
                    :
                    <DesktopPromo data={promos} />
            }

        </Layout>
    )

}

export default Home