import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({icon, title}) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  );
};

// with below we dont need to declare props
Navbar.defaultProps = {
  title: 'Buscador GitHub',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
