 // eslint-disable-next-line 
import React from 'react';
import Header from './Header';
import Location from './Location';
import Produce from './Produce';
import '../App.css';

function App() {
  return (
    <>
      <div class="header">
        <Header/> 
      </div>
      <div class="body">
        <Location/>
        <Produce/> 
      </div>
    </>
  );
}

export default App;
