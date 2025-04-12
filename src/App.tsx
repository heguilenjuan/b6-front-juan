import { Suspense, lazy } from "react"

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loading from "@/components/Loading";
import NotFound from "@/pages/404/NotFound";
import DetailsProduct from "./pages/DetailsProduct/DetailsProduct";
import LoginPage from "./pages/Login/LoginPage";

//Componentes con LAZY
const Home = lazy(() => import("@/pages/Home/Home"));
const Cupons = lazy(() => import("@/pages/Cupons/Cupons"));
const Menu = lazy(() => import("@/pages/Menu/Menu"));
const Location = lazy(() => import("@/pages/Location/Location"));



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cupons" element={<Cupons />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/product/details/:productId" element={<DetailsProduct/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>

  )
}

export default App
