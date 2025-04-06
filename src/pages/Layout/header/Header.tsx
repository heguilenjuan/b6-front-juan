

import PersistentBar from './PersistentBar'
import Logo from './Logo'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'

const Header = () => {
  return (
    <PersistentBar>
      <HamburgerMenu />
      <Logo />
      <div className="hamburger-right"></div>
    </PersistentBar>
  )
}

export default Header