import React from 'react';
import './App.scss';


let coordinates = [[0, 0], [50, 0], [100, 0], [150, 0], [200, 0], [250, 0], [300, 0], [350, 0], [400, 0], [450, 0], [500, 0], [550, 0], [600, 0]]
function App() {
  return (
    <div className="App">
      <div className="Greed">
        <SquareСell />
      </div>
    </div>
  );
}

export default App


let SquareСell = () => {
  return (
    <div>
      <svg className="SVG" width="600" height="150">
        {coordinates.map((el) => {
          return <rect x={el[0]} y={el[1]} width="50" height="50"
            fill="skyblue" stroke="steelblue" strokeWidth="1"
          />
        })}
      </svg>
    </div>
  )
}