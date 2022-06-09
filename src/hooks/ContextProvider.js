import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterByColumn, setFilterByColumn] = useState(
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  );
  const [filterByComparison, setFilterByComparison] = useState(
    'maior que',
    'menor que',
    'igual a',
  );
  const [filterByValue, setFilterByValue] = useState(0);
  const context = {
    data,
    setData,
    filterByName,
    setFilterByName,
    filterData,
    setFilterData,
    filterByNumericValues,
    setFilterByNumericValues,
    filterByColumn,
    setFilterByColumn,
    filterByComparison,
    setFilterByComparison,
    filterByValue,
    setFilterByValue,
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const api = await response.json();
      console.log(api);
      setData(api.results);
      setFilterData(api.results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filterName = data.filter((planet) => planet.name.toLowerCase()
      .includes(filterByName));

    const resultFilterComparison = filterByNumericValues
      .reduce((acc, filter) => acc.filter((planet) => {
        switch (filter.filterByComparison) {
        case 'maior que':
          return planet[filter.filterByColumn] > Number(filter.filterByValue);
        case 'menor que':
          return planet[filter.filterByColumn] < Number(filter.filterByValue);
        case 'igual a':
          return planet[filter.filterByColumn] === filter.filterByValue;
        default:
          return true;
        }
      }), filterName);

    setFilterData(resultFilterComparison);
  }, [filterByName, filterByNumericValues]);

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
