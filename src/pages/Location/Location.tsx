import { useState } from "react";
//Components

//Hooks

//Styles
import "../Location/styles/locationPage.scss";

import parqueB6 from '@/assets/images/location/WEBAPP B6-Locales-PARQUE.jpg'
import shoppingB6 from '@/assets/images/location/WEBAPP B6-Locales-SHOPPING.jpg'
import centroB6 from '@/assets/images/location/WEBAPP B6-Locales-CENTRO.jpg'
import Map, { branches } from "./components/Map";
import Layout from "../Layout/Layout";
import CardLocation from "./components/CardLocation";
import { useScrollToMap } from "./hooks/useScrollToMap";

export interface CardLocationProps {
    name: string;
    location: string;
    image: string;
    onClick?: () => void;
}


export const branchesCard: CardLocationProps[] = [
    {
        name: "Big Six Centro",
        location: "Donado 55",
        image: centroB6
    },
    {
        name: "Big Six Shopping",
        location: "Plaza Shopping",
        image: shoppingB6
    },
    {
        name: "Big Six Parque",
        location: "Cordoba 1000",
        image: parqueB6
    }
]


export interface BranchProp {
    name: string;
    coordinates: { x: number; y: number };
}

const Location = () => {
    const [openPopup, setOpenPopup] = useState<string | null>(null);
    const scrollToMap = useScrollToMap();

    const handleMarkerClick = (branchName: string) => {
        setOpenPopup(branchName);
        scrollToMap();
    };

    return (
        <Layout>
            <section className="map">
                <Map branches={branches} openPopup={openPopup} />
            </section>
            <section className="location-cards">
                {branchesCard.map((branch: any) => (
                    <CardLocation
                        key={branch.name}
                        name={branch.name}
                        location={branch.location}
                        image={branch.image}
                        onClick={() => handleMarkerClick(branch.name)}
                    />
                ))}
            </section>
        </Layout>
    );
};

export default Location;
