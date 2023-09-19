import React from 'react';
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p>Teléfono de Contacto: +123456789</p>
        <p>Dirección: 742 Evergreen Terrace, Springfield</p>
        <p>Email: <a href="mailto:info@phoenixstore.com">info@phoenixstore.com</a></p>
        <a href="https://www.instagram.com/phoenixstore" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram@Phoenix Store</a>
        <a href="https://twitter.com/phoenixstore" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter: Phoenix Store</a>
        <a href="https://www.facebook.com/phoenixstore" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook: Phoenix Store</a>
      </div>
    </footer>
  );
};

export default Footer;