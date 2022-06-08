import React, { useContext } from 'react';
import Context from '../hooks/Context';

function InputFilter() {
  const { setFilterByName } = useContext(Context);

  const handleChange = ({ target: { value } }) => {
    setFilterByName(value.toLowerCase());
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
          onChange={ (event) => handleChange(event) }
        />
      </label>
    </form>
  );
}

export default InputFilter;
