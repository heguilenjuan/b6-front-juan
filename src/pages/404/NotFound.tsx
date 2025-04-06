import Layout from '../Layout/Layout';
import './styles/NotFound.scss';
import logo from '@/assets/icons/logo_red.png'

const NotFound = () => {
  return (
    <Layout>
      <div className="page-404">
        <img src={logo} alt='logo de big six' className='logo-404' />
        <h1>Error 404</h1>
        <p>Oops... Esta página no existe.</p>
        <a href="/">Volver al inicio</a>
      </div>
    </Layout>
  );
};

export default NotFound;
