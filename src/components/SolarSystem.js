import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="planetContainer">
        <Title headline="Planetas" />
        <div className="planetBox">
          {planets.map(({ name, image }) => (
            <PlanetCard
              planetName={ name }
              planetImage={ image }
              key={ name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
