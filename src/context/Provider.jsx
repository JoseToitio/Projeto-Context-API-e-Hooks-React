import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requestAPI from '../services/requestAPI';
import planetsContext from './planets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    requestAPI()
      .then(({ results }) => setData(results));
  }, []);

  const dataContext = {
    data,
  };

  return (
    <planetsContext.Provider value={ dataContext }>
      {children}
    </planetsContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
