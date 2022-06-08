import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterByColumn, setFilterByColumn] = useState('');
  const [filterByComparison, setFilterByComparison] = useState('');
  const [filterByValue, setFilterByValue] = useState('');
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
    const testFilter = data.filter((planet) => planet.name.toLowerCase()
      .includes(filterByName));
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
