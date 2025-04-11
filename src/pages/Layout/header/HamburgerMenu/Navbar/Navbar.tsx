import NavButton from "./NavButton"
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

import '@/pages/Layout/styles/navbar.scss'



const Navbar = ({ isVisible }: any) => {

  const navItems = [
    {
      icon: HomeIcon,
      label: "Inicio",
      href: "/"
    },
    {
      icon: LunchDiningIcon,
      label: "Menú",
      href: "/menu"
    },
    {
      icon: ConfirmationNumberIcon,
      label: "Cupones",
      href: "/cupons"
    },
    {
      icon: LocationOnIcon,
      label: "Locales",
      href: "/location"

    }
    , {
      icon: PersonIcon,
      label: "Iniciar sesion",
      href: "/login"
    }
  ]

  return (
    <nav
      className="navbar-hamburger"
      aria-hidden={isVisible ? "false" : "true"}
      hidden={!isVisible}
    >
      {navItems.map((item, index) => {
        return <NavButton
          key={`${index}-navItem`}
          icon={item.icon}
          label={item.label}
          href={item.href}
          tabIndex={isVisible ? 0 : -1}
        />
      })}
    </nav>
  )
}

export default Navbar