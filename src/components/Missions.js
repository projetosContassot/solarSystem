import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className='missionSection' data-testid="missions">
        <Title headline="Missões" />
        <div className='missionContainer'>
          {missions.map((mission, index) => {
            const { name, year, country, destination } = mission;
            return (<MissionCard
              key={ index }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />);
          })}
        </div>
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

export default Missions;
