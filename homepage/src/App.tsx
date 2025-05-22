import React from 'react';
import './App.css';
import Item from './components/item';
import Box from './components/box';
import SingBoxList from './components/SingBoxList';


function App() {

  return (
    <div className="App">
      <h2>Slick Slider</h2>
      <Item/>
      <SingBoxList />
      <Box/>
    </div>
  );
}

export default App;
