import React from 'react';
import Table from './components/Table';
import ContextProvider from './hooks/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Table />
    </ContextProvider>
  );
}

export default App;
