import React from 'react';
import './App.scss';

let greedWidth: number = 600
let greedHeight: number = 150
let numberOfSquareCells: number = 36
let numberOfRows = 3
let coordinatesOfFirstSquareCell: Array<number> = [0, 100];
let coordinatesOfSquareCells: Array<coordinatesOfSquareCell> = []
type coordinatesOfSquareCell = Array<number>
let oneCellWidth: number = greedWidth / 12
let currentCoordinatesOfSquareCell: Array<number> = coordinatesOfFirstSquareCell
let currentNumberOfRows: number = 0;

function addCoordinatesOfFirstSquareCell() {
  coordinatesOfSquareCells.push(coordinatesOfFirstSquareCell)
  currentCoordinatesOfSquareCell = coordinatesOfFirstSquareCell
  currentNumberOfRows++
}
addCoordinatesOfFirstSquareCell()

for (let i = 1; i < numberOfSquareCells; i++) {
  if (currentNumberOfRows < numberOfRows) {
    let coordinatesOfNextCell = [currentCoordinatesOfSquareCell[0], currentCoordinatesOfSquareCell[1] - oneCellWidth]
    coordinatesOfSquareCells.push(coordinatesOfNextCell)
    currentCoordinatesOfSquareCell = coordinatesOfNextCell
    currentNumberOfRows++
  }
  if (currentNumberOfRows >= numberOfRows) {
    currentCoordinatesOfSquareCell = [currentCoordinatesOfSquareCell[0] + oneCellWidth, greedHeight]
    currentNumberOfRows = 0
  }
}

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
        {coordinatesOfSquareCells.map((squareCell, index) => {
          return  <g>
            <rect x={squareCell[0]} y={squareCell[1]} key={index} width="50" height="50"
            fill="skyblue" stroke="steelblue" strokeWidth="1"
            ></rect>
            <text x={squareCell[0]+18} y={squareCell[1]+30} font-size="15px" font-weight="bold" stroke="black" stroke-width="0.5" >{++index}</text>
          </g>
        })}
      </svg>
    </div>
  )
}