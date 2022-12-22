import './App.css';
import DataTable from './DataTable';
import React from 'react';
const App = () => {
  const data = [
    {name:'Dipak', otherField: 'dma'},
    { name: 'Alice', otherField: 'abc' },
    { name: 'Bob', otherField: 'def' },
    { name: 'Charlie', otherField: 'ghi' },
    { name: 'Alice', otherField: 'jkl' },
    { name: 'Alice', otherField: 'abc' },
    { name: 'Charlie', otherField: 'ghi' },
    { name: 'Alice', otherField: 'jkl' },
    { name: 'Alice', otherField: 'abc' },
    { name: 'Charlie', otherField: 'ghi' },
    { name: 'Alice', otherField: 'jkl' },
    { name: 'Alice', otherField: 'abc' },
    { name: 'Charlie', otherField: 'ghi' },
    { name: 'Alice', otherField: 'jkl' },
    { name: 'Alice', otherField: 'abc' },
    { name: 'Charlie', otherField: 'ghi' },
    { name: 'Alice', otherField: 'jkl' },
    { name: 'Alice', otherField: 'abc' },
    { name: 'Bob', otherField: 'def' },
    { name: 'Charlie', otherField: 'ghi' },
    { name: 'Alice', otherField: 'jkl' },
    {name:'Kirtiraj', otherField: 'kdb'},
    {name:'Ratikant', otherField: 'rpa'},
    {name:'Ratikant', otherField: 'rpa'},
    {name:'Ratikant', otherField: 'rpa'}
  ];

  return (
    <div className='demo'>
      <DataTable data={data} />
    </div>
  );
};
export default App;