import { ReactNode } from 'react';
import '@/styles/components/layout.scss'
import Header from './header/Header';

const Layout = ({ children }: { children: ReactNode, scrollable?: boolean }) => {
    return (
        <div className="layout">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout