import useIsMobile from "@/hooks/useIsMobile"
import Layout from "../Layout/Layout"
import CuponsMobile from "./components/Mobile/CuponsMobile"
import CuponsDesk from "./components/Desk/CuponsDesk";
import { CouponsProvider } from "./context/couponsContext";


const Cupons = () => {
    const isMobile = useIsMobile();

    return (
        <CouponsProvider>
            <Layout>
                {isMobile ? (<CuponsMobile />) : (<CuponsDesk />)}
            </Layout>
        </CouponsProvider>
    )
}

export default Cupons