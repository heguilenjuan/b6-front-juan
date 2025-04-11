import { ReactNode } from 'react';
import '@/styles/components/layout.scss'
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children }: { children: ReactNode, scrollable?: boolean }) => {
    return (
        <div className="layout">
            <Header />
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout