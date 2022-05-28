import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from './Popup';

class PlanetCard extends Component {
  constructor() {
    super();

    this.state = {
      trigger: false,
    };
    this.clicker = this.clicker.bind(this);
  }

  clicker() {
    this.setState({
      trigger: true,
    });
  }

  render() {
    const { planetName, planetImage } = this.props;
    const { trigger } = this.state;

    return (
      <div data-testid="planet-card" className="planetBoxes">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="imgs" />
        <button type="button" onClick={ this.clicker }>PopUp</button>
        { trigger
          ? <Popup trigger fetch={ planetName } />
          : <Popup trigger={ false } fetch={ planetName } /> }
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
