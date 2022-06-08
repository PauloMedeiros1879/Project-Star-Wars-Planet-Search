import React, { useContext } from 'react';
import Context from '../hooks/Context';

function InputFilter() {
  const { setFilterByName } = useContext(Context);

  const handleFilterName = ({ target }) => {
    setFilterByName(target.value.toLowerCase());
  };

  return (
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
    </form>
  );
}

export default InputFilter;
