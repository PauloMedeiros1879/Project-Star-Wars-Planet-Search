import React, { useContext } from 'react';
import Context from '../hooks/Context';

function InputFilterNumbers() {
  const {
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    filterByColumn,
    setFilterByColumn,
    filterByComparison,
    setFilterByComparison,
    filterByValue,
    setFilterByValue,
  } = useContext(Context);

  const handleFilterName = ({ target }) => {
    setFilterByName(target.value.toLowerCase());
  };

  const applyFilter = () => {
    const newFilterByNumericValues = {
      filterByColumn,
      filterByComparison,
      filterByValue,
    };
    setFilterByNumericValues([...filterByNumericValues, newFilterByNumericValues]);
  };

  const usedOptions = filterByNumericValues.map(({ column }) => column);
  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const disponibleOptionsFunc = () => {
    const disponibleOptions = options.filter((option) => !usedOptions.includes(option));
    return disponibleOptions
      .map((option) => (
        <option key={ option } value={ option }>{option}</option>
      ));
  };

  const removeFilterItem = (index) => {
    setFilterByNumericValues(filterByNumericValues
      .filter(({ column }) => column !== index));
  };

  function renderActiveFilters() {
    return filterByNumericValues
      .map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          <p>{`${column} ${comparison} ${value}`}</p>
          <button
            type="button"
            onClick={ () => removeFilterItem(column) }
          >
            Excluir
          </button>
        </div>
      ));
  }

  const removeFilter = () => {
    setFilterByNumericValues(['']);
  };

  return (
    <div>
      <form>
        <label htmlFor="search">
          Search
          <input
            type="text"
            data-testid="name-filter"
            name="search"
            id="search"
            onChange={ handleFilterName }
          />
        </label>

        <label htmlFor="column">
          Coluna
          <select
            name="column"
            id="column"
            data-testid="column-filter"
            value={ filterByColumn }
            onChange={ ({ target }) => setFilterByColumn(target.value) }
          >
            { disponibleOptionsFunc() }
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
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
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

        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeFilter }
        >
          REMOVE FILTRO

        </button>
      </form>
      { renderActiveFilters() }
    </div>
  );
}

export default InputFilterNumbers;
