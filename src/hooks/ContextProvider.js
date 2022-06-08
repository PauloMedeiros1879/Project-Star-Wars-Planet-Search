import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterByName, setfilterByName] = useState('');
  const context = {
    data,
    setData,
    filterByName,
    setfilterByName,
    filterData,
    setFilterData,
  };

  useEffect(() => {
    async function fetchPlanets() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const api = await response.json();
      const { results } = api;
      setData(results);
      setFilterData(results);
    }

    fetchPlanets();
  }, []);

  useEffect(() => {
    const testFilter = data.filter((planet) => planet.name.includes(filterByName));
    setFilterData(testFilter);
  }, [filterByName]);

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
