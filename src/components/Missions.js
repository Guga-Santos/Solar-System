import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missionContainer">
        <Title headline="Missões" />
        <div className="missionBox">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
