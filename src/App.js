import React, { Component, Fragment } from 'react';
import logo from './logo.png';
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
      id: 'producto1',
      title: 'Camisa 1',
      description: 'Descripción',
      price: 100.0,
      image:
        'https://vangogh.teespring.com/v3/image/oGRwVyoQlFfX-UDpYHwSIjMuDa0/480/560.jpg',
      shipping: 'No shipping'
    },
    {
      id: 'producto2',
      title: 'Camisa 2',
      description: 'Descripción',
      price: 100.0,
      image:
        'https://vangogh.teespring.com/v3/image/oGRwVyoQlFfX-UDpYHwSIjMuDa0/480/560.jpg',
      shipping: 'No shipping'
    },
    {
      id: 'cat',
      title: 'My Cat Can Live A Better Life Shirt',
      description:
        'I Work Hard So My Cat Can Live A Better Life Shirt, Funny Cat Shirt',
      price: 100.0,
      image:
        'https://vangogh.teespring.com/v3/image/oGRwVyoQlFfX-UDpYHwSIjMuDa0/480/560.jpg',
      shipping: `Orders are printed and shipped when the time expires or earlier.
              You can expect your package to arrive 10 - 13 business days after
              the product prints. Expedited or Rush shipping may be available
              depending upon the product(s) selected and the destination
              country. Shipping costs start at: $3.99 for the first apparel item
              and $2.00 for each additional apparel item. Products are fulfilled
              in the US`
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
          <img style={styles.navLogo} src={logo} alt="calithecat" />
          <div style={styles.navLinksContainer}>
            <a style={styles.navLink} href="http://midominio.com">
              HOME
            </a>
            <a style={styles.navLink} href="http://midominio.com/blog">
              BLOG
            </a>
            <a style={styles.navLink} href="http://midominio.com/contact">
              CONTACT
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
            <p style={styles.shipping}>Shipping Info</p>
            <p style={styles.details}>{product.shipping}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
