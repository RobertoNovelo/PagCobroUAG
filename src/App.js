import React, { Component, Fragment } from 'react';
import logo from './tonalalogo.png';
import './App.css';
import Switch from 'react-router-dom/es/Switch';
import Route from 'react-router-dom/es/Route';
import Redirect from 'react-router-dom/es/Redirect';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
const Conekta = window.Conekta; // No npm package available, imported in index.html

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/productos/:id" component={Item} />
          <Route path="/" exact strict component={Item} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

class Item extends Component {
  styles = {
    itemContainer: {
      display: 'flex',
      height: '50rem',
      paddingTop: '5rem',
      paddingLeft: '15rem',
      paddingRight: '10rem'
    },
    navContainer: {
      position: 'fixed',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem',
      width: '100%',
      backgroundColor: 'white',
      borderBottom: '1px solid rgba(0,0,0,.1)'
    },
    navLogo: {
      height: '80%'
    },
    navLinksContainer: {
      display: 'flex',
      paddingRight: '4rem'
    },
    navLink: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: '300',
      fontSize: '1.1rem',
      wordWrap: 'break-word',
      textDecoration: 'none',
      color: 'inherit',
      marginRight: '1rem'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
      flexGrow: 3
    },
    itemImage: {
      height: '80%',
      width: 'auto'
    },
    detailsContainer: {
      paddingLeft: '6rem',
      paddingTop: '4rem',
      overflow: 'auto',
      flexGrow: 7
    },
    title: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: '300',
      fontSize: '2rem',
      wordWrap: 'break-word'
    },
    description: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: '400',
      fontSize: '1.1rem',
      wordWrap: 'break-word'
    },
    details: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: '300',
      fontSize: '1.1rem',
      wordWrap: 'break-word'
    },
    price: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: '1.2rem',
      fontWeight: '400',
      wordWrap: 'break-word'
    },
    shipping: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: '1.3rem',
      fontWeight: '500',
      wordWrap: 'break-word'
    }
  };
  products = [
    {
      id: 'best',
      title: 'Cute best cat',
      description: 'Descripción',
      price: 100.0,
      image:
        'https://images.lookhuman.com/render/standard/8484056982502988/3300-athletic_gray-z1-t-every-cat-is-the-best-cat.png',
      shipping: 'No shipping'
    },
    {
      id: 'NewB',
      title: 'NewBalance Artesanales',
      description:
        'Decoración tenis NewBalance a mano talle 27',
      price: 1200.0,
      image:
        'http://yosoydenayarit.com/wp-content/uploads/2015/10/artesan%C3%ADa-huichol-tennis-620x400.jpg',
      shipping: `Los pedidos se imprimen y se envían cuando expira el tiempo o antes.
                  Puede esperar que su paquete llegue entre 10 y 13 días hábiles después
                    que el producto sea enviado. El envío apresurado o urgente puede estar disponible
                    dependiendo del producto (s) seleccionado (s) y el destino en el
                    país. Los costos de envío comienzan en: 30.00MXN por la primera prenda de vestir
                    y 20.00MXN por cada artículo de vestimenta adicional. Los productos se hacen en México`
    }
  ];
  render() {
    const { styles, products } = this;
    const product = products.find(p => p.id == this.props.match.params.id) || {
      ...products[Math.floor(Math.random() * products.length)]
    };
    return (
      <Fragment>
        <div style={styles.navContainer}>
          <img style={styles.navLogo} src={logo} alt="TonalaRtesanal" />
          <div style={styles.navLinksContainer}>
            <a style={styles.navLink} href="./App.js">
              PRINCIPAL
            </a>
            <a style={styles.navLink} href="./About.js">
              PRODUCTOS
            </a>
            <a style={styles.navLink}  href="./About.js">
              ABOUT
            </a>
          </div>
        </div>
        <div style={styles.itemContainer}>
          <div style={styles.imageContainer}>
            <img style={styles.img} src={product.image} alt="Product Image" />
          </div>
          <div style={styles.detailsContainer}>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>${product.price} MXN</p>
            <p style={styles.shipping}>Información de envío</p>
            <p style={styles.details}>{product.shipping}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
