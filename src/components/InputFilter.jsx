import React, { useContext, useState } from 'react';
import Context from '../hooks/Context';
import '../style/InputFilter.css';

function InputFilter() {
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

  const columnsState = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const [columnState, setColumnState] = useState(columnsState);

  const applyFilter = () => {
    const newFilterByNumericValues = {
      filterByColumn,
      filterByComparison,
      filterByValue,
    };
    setFilterByNumericValues([...filterByNumericValues, newFilterByNumericValues]);

    const deleteFilter = columnState.filter((filter) => filter !== filterByColumn);

    setColumnState(deleteFilter);
  };
  const removeFilter = () => {
    setFilterByNumericValues([{ column: '', comparison: '', value: 0 }]);
  };

  const removeFilterItems = (index) => {
    const removeFilters = filterByNumericValues
      .filter((_item, i) => i !== index);
    setFilterByNumericValues(removeFilters);
  };

  return (
    <form>
      <h1>Projeto Star Wars - Trybe</h1>

      <div className="input_search">
        <label htmlFor="search">
          Buscar:
          <input
            className="item_search"
            type="text"
            data-testid="name-filter"
            name="search"
            id="search"
            onChange={ handleFilterName }
          />
        </label>
      </div>

      <div className="input_containers">
        <label htmlFor="column">
          Coluna:
          <select
            className="item_column"
            name="column"
            id="column"
            data-testid="column-filter"
            value={ filterByColumn }
            onChange={ ({ target }) => setFilterByColumn(target.value) }
          >
            {columnState.map((filter, i) => <option key={ i }>{filter}</option>)}
          </select>
        </label>

        <label htmlFor="comparison">
          Operador:
          <select
            className="item_comparison"
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
          className="item_value"
          type="number"
          placeholder="0"
          data-testid="value-filter"
          value={ filterByValue }
          onChange={ ({ target }) => setFilterByValue(target.value) }
        />

        <button
          className="item_btn_filter"
          type="button"
          data-testid="button-filter"
          onClick={ applyFilter }
        >
          FILTRAR

        </button>

        <button
          className="item_btn_remove"
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeFilter }
        >
          REMOVER FILTRO

        </button>
      </div>
      {filterByNumericValues.map((filter, index) => (
        <div key={ `${filter.column} ${index}` } data-testid="filter">
          <p className="item_value">
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </p>
          <button
            className="item_btn_remove"
            type="button"
            onClick={ () => removeFilterItems(index) }
          >
            X
          </button>
        </div>
      ))}
    </form>
  );
}

export default InputFilter;
