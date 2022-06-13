import React from 'react';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import ContextProvider from './hooks/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <InputFilter />
      <Table />
    </ContextProvider>
  );
}

export default App;
