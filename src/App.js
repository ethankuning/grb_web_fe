import React, {Fragment} from 'react';
import './App.css';

import InputBook from "./components/inputBook";
import ListBook from "./components/listBook";
import SqlQuery from './components/sqlQuery';

function App() {
  return (
  <Fragment> 
    <div className='container'>
      <InputBook />
      <ListBook />
      <SqlQuery />
    </div>
  </Fragment>);
}

export default App;
