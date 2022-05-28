import React, { Component } from 'react';
import logoIMG from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <img src={ logoIMG } alt="logo" className="logo" />
        <h1>Sistema Solar</h1>
      </header>
    );
  }
}

export default Header;
