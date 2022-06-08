import React, { useContext } from 'react';
import Context from '../hooks/Context';

function InputFilterNumbers() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    filterByColumn,
    setFilterByColumn,
    filterByComparison,
    setFilterByComparison,
    filterByValue,
    setFilterByValue,
  } = useContext(Context);

  const handleFilter = () => {
    const newFilterByNumericValues = {
      filterByColumn,
      filterByComparison,
      filterByValue,
    };
    setFilterByNumericValues(...filterByNumericValues, newFilterByNumericValues);
  };

  return (
    <form>
      <label htmlFor="column">
        Coluna
        <select
          name="column"
          id="column"
          onChange={ ({ target }) => setFilterByColumn(target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison">
        Operador
        <select
          name="comparison"
          id="comparison"
          onChange={ ({ target }) => setFilterByComparison(target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>

      <input
        type="number"
        placeholder="0"
        onChange={ ({ target }) => setFilterByValue(target.value) }
      />

      <button type="button" onChange={ handleFilter }>FILTRAR</button>
    </form>
  );
}

export default InputFilterNumbers;
