import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet, index) => {
          const { name, image } = planet;
          return (<PlanetCard
            key={ index }
            planetName={ name }
            planetImage={ image }
          />);
        })}
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default SolarSystem;
