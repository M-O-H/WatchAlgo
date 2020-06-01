import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Button color="danger">Danger!</Button>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
