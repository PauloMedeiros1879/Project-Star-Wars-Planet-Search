import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const context = {
    data,
    setData,
  };

  useEffect(() => {
    async function fetchPlanets() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const apiData = await response.json();
      const { results } = apiData;
      setData(results);
    }

    fetchPlanets();
  }, []);

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ContextProvider;
