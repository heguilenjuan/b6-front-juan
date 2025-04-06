import { useState,useEffect } from 'react'
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

                <MenuIcon className='hamburger-icon'
                    onClick={toggleMenu}
                />
                <div className={`hamburger-menu ${isOpen ? 'open-menu' : 'close-menu'}`}>
                    <div className='humberger-header'>
                        <CloseIcon onClick={toggleMenu}
                            className='hamburger-icon' />
                    </div>
                    <div className='hambuerger-content'>
                        <Navbar />
{/*                         <ThemeToggle />
 */}                    </div>
                </div>

            </div>
            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    )
}

export default HamburgerMenu