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

  const applyFilter = () => {
    const newFilterByNumericValues = {
      filterByColumn,
      filterByComparison,
      filterByValue,
    };
    setFilterByNumericValues([...filterByNumericValues, newFilterByNumericValues]);
  };

  return (
    <form>
      <label htmlFor="column">
        Coluna
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          value={ filterByColumn }
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
          data-testid="comparison-filter"
          value={ filterByComparison }
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
        data-testid="value-filter"
        value={ filterByValue }
        onChange={ ({ target }) => setFilterByValue(target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyFilter }
      >
        FILTRAR

      </button>
    </form>
  );
}

export default InputFilterNumbers;
