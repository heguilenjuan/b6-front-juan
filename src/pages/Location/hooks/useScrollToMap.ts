export const useScrollToMap = () => {
    return () => {
        const mapElement = document.getElementById("map");
        if (mapElement) {
            mapElement.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    };
};
