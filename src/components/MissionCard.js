import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="missionCards">
        <p data-testid="mission-name" className="missionName">{name}</p>
        <p data-testid="mission-year">{`Foi lançada em ${year},`}</p>
        <p data-testid="mission-country">{` pelos ${country},`}</p>
        <p data-testid="mission-destination">{`com destino: ${destination}!`}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
