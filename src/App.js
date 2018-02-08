import React, {
  Component,
  Fragment
} from 'react';
import logo from './logo.png';
import methods_statement_cards from './methods_statement_cards.png';
import oxxopay from './oxxopay.svg';
import paypal from './paypal.svg';
import './App.css';

class App extends Component {
  render() {
    const styles = {
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
        height: '60%'
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
      itemImagePago: {
        width: '80%',
        display: 'flex'
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
      subtitle: {
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
    return (

      <
      Fragment >
      <
      div style = {
        styles.navContainer
      } >
      <
      img style = {
        styles.navLogo
      }
      src = {
        logo
      }
      alt = "calithecat" / >
      <
      div style = {
        styles.navLinksContainer
      } >
      <
      a style = {
        styles.navLink
      }
      href = "http://midominio.com" >
      HOME <
      /a> <
      a style = {
        styles.navLink
      }
      href = "http://midominio.com/blog" >
      BLOG <
      /a> <
      a style = {
        styles.navLink
      }
      href = "http://midominio.com/contact" >
      CONTACT <
      /a> < /
      div > <
      /div> <
      div style = {
        styles.itemContainer
      } >
      <
      div style = {
        styles.imageContainer
      } >
      <
      img style = {
        styles.img
      }
      src = "https://vangogh.teespring.com/v3/image/oGRwVyoQlFfX-UDpYHwSIjMuDa0/480/560.jpg"
      alt = "Product Image" /
      >
      <
      /div> <
      div style = {
        styles.detailsContainer
      } >
      <
      h1 style = {
        styles.title
      } > My Cat Can Live A Better Life Shirt < /h1> <
      p style = {
        styles.subtitle
      } >
      I Work Hard So My Cat Can Live A Better Life Shirt, Funny Cat Shirt <
      /p> <
      p style = {
        styles.price
      } > $350 MXN < /p> <
      p style = {
        styles.shipping
      } > Shipping Info < /p> <
      p style = {
        styles.details
      } >
      Orders are printed and shipped when the time expires or earlier.You can expect your package to arrive 10 - 13 business days after the product prints.Expedited or Rush shipping may be available depending upon the product(s) selected and the destination country.Shipping costs start at: $3 .99
      for the first apparel item and $2 .00
      for each additional apparel item.Products are fulfilled in the US <
      /p> 


      <
      div styles = {
        styles.details
      } >

      <
      img style = {
        styles.itemImagePago
      }
      src = {
        oxxopay
      }
      alt = "Oxxo Pay" / >

      <
      img style = {
        styles.itemImagePago
      }
      src = {
        paypal
      }
      alt = "Pay Pay" / >

      <
      img style = {
        styles.itemImagePago
      }
      src = {
        methods_statement_cards
      }
      alt = "Method Cards" / >

      <
      /      div >


      <
      /
      div >



      <
      /div>



      <
      /Fragment>
    );
  }
}

export default App;