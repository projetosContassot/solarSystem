import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className='missionCard' data-testid="mission-card">
        <p className='cardItem' data-testid="mission-name"><strong>{ name }</strong></p>
        <p className='line'/>
        <p className='cardItem' data-testid="mission-year">{ year }</p>
        <p className='cardItem' data-testid="mission-country">{ country }</p>
        <p className='cardItem' data-testid="mission-destination">{ destination }</p>
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
