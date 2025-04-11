import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from './Navbar/Navbar';
/* import ThemeToggle from './ThemeToggle';
 */
import '../../styles/hamburgerMenu.scss'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Limpieza por si el componente se desmonta con el menú abierto
        return () => document.body.classList.remove('no-scroll');
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className='hamburger-content'>
                <button
                    className='hamburger-btn'
                    onClick={toggleMenu}
                    aria-label='Abrir menú de navegación'
                    aria-controls='mobile-navigation'
                    aria-expanded={`${isOpen}`}

                >
                    <MenuIcon className='hamburger-icon' />
                </button>

                <div
                    id='navigation'
                    className={`hamburger-menu ${isOpen ? 'open-menu' : 'close-menu'}`}
                    role='dialog'
                    aria-hidden={isOpen ? "false" : "true"}
                    aria-label="Menú de navegación"
                    aria-modal={isOpen ? 'true' : undefined}
                    tabIndex={-1}

                >
                    <div className='humberger-header'>
                        <button
                            onClick={toggleMenu}
                            className='hamburger-btn'
                            aria-label='Cerrar menú de navegación'
                        >
                            <CloseIcon className='hamburger-icon' />
                        </button>

                    </div>
                    <div
                        className='hambuerger-content'
                        aria-hidden={isOpen ? "false" : "true"}
                        tabIndex={isOpen ? 0 : -1}
                    >
                        <Navbar
                            isVisible={isOpen}
                        />
                        {/*<ThemeToggle />*/}
                    </div>
                </div>

            </div>
            {isOpen && <div className="overlay" onClick={toggleMenu} role='presentation'></div>}
        </>
    )
}

export default HamburgerMenu