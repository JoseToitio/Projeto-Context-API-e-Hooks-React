import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requestAPI from '../services/requestAPI';
import planets from './planets';

function Provider({ children }) {
  const [planetss, setPlanets] = useState([]);
  useEffect(() => {
    requestAPI()
      .then(({ results }) => setPlanets(results));
  }, []);

  const dataContext = {
    data: planetss,
  };

  return (
    <planets.Provider value={ dataContext }>
      {children}
    </planets.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
