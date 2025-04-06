import { useEffect, useState } from "react";
//Leaftlet-maps
import L from "leaflet";
//Styles
import "leaflet/dist/leaflet.css";
import "../styles/map.scss";

//Imagenes
import heartSVG from "@/assets/icons/logo_red.png";
import { BranchProp } from "../Location";

export const branches: BranchProp[] = [
    { name: "Big Six Centro", coordinates: { x: -38.72102293937885, y: -62.26647766252515 } },
    { name: "Big Six Parque", coordinates: { x: -38.69846687215582, y: -62.26766735513375 } },
    { name: "Big Six Shopping", coordinates: { x: -38.699453795434906, y: -62.2409530170591 } },
];


export interface MapProps {
    branches: BranchProp[];
    openPopup: string | null;
}

const Map = ({ branches, openPopup }: MapProps) => {
    const heartIcon = L.icon({ iconUrl: heartSVG, iconSize: [50, 50] });
    const [markers, setMarkers] = useState<{ [key: string]: L.Marker }>({});

    useEffect(() => {
        const mapContainer = document.getElementById("map");
        if (mapContainer && (mapContainer as any)._leaflet_id !== undefined) return;

        const map = L.map("map", {
            center: [-38.70897385121962, -62.2570377893427],
            zoom: 13,
            scrollWheelZoom: false,
            zoomControl: false,
            touchZoom: false,
            tapHold: false,
            boxZoom: false,
            doubleClickZoom: false,
            dragging: false,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        const newMarkers: { [key: string]: L.Marker } = {};
        branches.forEach((branch) => {
            const marker = L.marker([branch.coordinates.x, branch.coordinates.y], { icon: heartIcon }).addTo(map);
            marker.bindPopup(`<p>${branch.name}</p>`);

            marker.on("click", () => bounceIcon(marker));
            newMarkers[branch.name] = marker;
        });

        setMarkers(newMarkers);

        return () => {
            map.remove();
        };
    }, []);

    const bounceIcon = (marker: L.Marker) => {
        let i = 0;
        const originalLat = marker.getLatLng().lat;
        const bounceHeight = 0.0006;

        const interval = setInterval(() => {
            const newLat = originalLat + Math.sin(i * 0.5) * bounceHeight;
            marker.setLatLng([newLat, marker.getLatLng().lng]);
            marker.openPopup();
            if (i++ > 30) clearInterval(interval);
        }, 15);
    };

    useEffect(() => {
        if (openPopup && markers[openPopup]) {
            markers[openPopup].openPopup();
            bounceIcon(markers[openPopup]);
        }
    }, [openPopup, markers]);

    return <div id="map" className="map-container"></div>;
};

export default Map;
