import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';
import Footer from './components/Footer';
import Popup from './components/Popup';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Popup trigger={ false } />
        <Missions />
        <Footer />
      </>
    );
  }
}

export default App;
