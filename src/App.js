import React from 'react';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import InputFilterNumbers from './components/InputFilterNumbers';
import ContextProvider from './hooks/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <InputFilter />
      <InputFilterNumbers />
      <Table />
    </ContextProvider>
  );
}

export default App;
