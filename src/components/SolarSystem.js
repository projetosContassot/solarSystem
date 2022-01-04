import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className='planetSection' data-testid="solar-system">
        <Title headline="Planetas" />
        <div className='planetContainer'>
          {planets.map((planet, index) => {
            const { name, image } = planet;
            return (<PlanetCard
              key={ index }
              planetName={ name }
              planetImage={ image }
            />);
          })}
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default SolarSystem;
