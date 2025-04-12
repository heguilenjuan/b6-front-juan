import { Link } from 'react-router-dom';
import '../styles/footer.scss';
import logoRed from '@/assets/icons/logo_red.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import useIsMobile from '@/hooks/useIsMobile';
const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <footer className='footer' role='contentinfo'>
      {isMobile ? (
        <>
          <section className='footer__nav-brand'>
            <figure>
              <img src={logoRed} alt='Logo de Big Six' width={65} height={65} />
            </figure>
            <ul className='footer__nav-brand-list'>
              <li> <Link to={"/"}>Inicio </Link></li>
              <li> <Link to={"/menu"}>Menu </Link></li>
              <li> <Link to={"/cupons"}>Cupones </Link></li>
              <li> <Link to={"/location"}>Locales </Link></li>
              <li> <Link to={"/login"}>Iniciar sesion </Link></li>
            </ul>
          </section>
          <section className='footer__social'>
            <nav>
              <ul className='footer__social-list'>
                <li>
                  <a
                    href='https://www.facebook.com/BigSixArg'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Big Six en Facebook'
                  >
                    <FacebookIcon className='social-icon' />

                  </a>
                </li>
                <li >
                  <a
                    href='https://www.instagram.com/bigsix_ok/?igsh=ZThoNW1qbzRydXJp#'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Big Six en Instagram'

                  >
                    <InstagramIcon className='social-icon' />
                  </a>
                </li>
              </ul>
            </nav>
          </section>

        </>
      ) :
        <section className='footer__nav-brand'>
          <figure>
            <img src={logoRed} alt='Logo de Big Six' width={65} height={65} />
          </figure>
          <nav aria-labelledby="footer-navigation-title">
            <h3>Navegacion</h3>
            <ul className='footer__nav-brand-list'>
              <li> <Link to={"/"}>Inicio </Link></li>

              <li> <Link to={"/location"}>Locales </Link></li>
              <li> <Link to={"/menu"}>Menu </Link></li>
              <li> <Link to={"/login"}>Iniciar sesion </Link></li>
              <li> <Link to={"/cupons"}>Cupones </Link></li>

            </ul>
          </nav>
          <nav aria-labelledby="footer-social-title" className='footer__social'>

            <h3>Redes</h3>
            <ul className='footer__social-list'>
              <li>
                <a
                  href='https://www.facebook.com/BigSixArg'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Big Six en Facebook'
                >
                  <FacebookIcon className='social-icon' />

                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/bigsix_ok/?igsh=ZThoNW1qbzRydXJp#'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Big Six en Instagram'
                >
                  <InstagramIcon className='social-icon' />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      }

      <hr />
      <section className='footer__legal-brand'>
        <p>
          <small>
            Copyright © 2025 Big Six
          </small>
        </p>
        <a
          href='https://buenosaires.gob.ar/gobierno/atencion-ciudadana/defensa-al-consumidor'
          target='_blank'
          rel='noopener noreferrer'
        >
          <small>
            Defensa del consumidor
          </small>
        </a>
      </section>
    </footer>
  )
}

export default Footer