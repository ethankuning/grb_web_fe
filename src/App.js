import React, {Fragment} from 'react';
import './App.css';

import InputBook from "./components/inputBook";
import ListBook from "./components/listBook";

function App() {
  return (
  <Fragment> 
    <div className='container'>
      <InputBook />
      <ListBook />
    </div>
  </Fragment>);
}

export default App;
