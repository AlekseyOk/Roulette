import React from 'react';
import './App.scss';

let greedWidth: number = 600
let greedHeight: number = 150
let numberOfSquareCells: number = 36
let numberOfRows: number = 3
let coordinatesOfSquareCells: Array<coordinatesOfSquareCell> = []
type coordinatesOfSquareCell = Array<number>
let coordinatesOfFirstSquareCell: Array<number> = [0, 100];
let oneCellWidth: number = greedWidth / 12
let currentCoordinatesOfSquareCell: Array<number> = coordinatesOfFirstSquareCell
let currentNumberOfRows: number = 0;

function addCoordinatesOfFirstSquareCell(): void {
  coordinatesOfSquareCells.push(coordinatesOfFirstSquareCell)
  currentCoordinatesOfSquareCell = coordinatesOfFirstSquareCell
  currentNumberOfRows++
}
addCoordinatesOfFirstSquareCell()

function generateSquareCellsCoordinates(): void {
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
}
generateSquareCellsCoordinates()

function App() {
  return (
    <div className="App">
      <div className="Greed">
        <SquareСells/>
      </div>
    </div>
  );
}

export default App

let SquareСells = () => {
  return (
    <div>
      <svg className="SVG" width="600" height="150">
        {coordinatesOfSquareCells.map((squareCell, index) => {
          let [coordX, coordY] = squareCell
          return <g>
            <rect x={coordX} y={coordY} key={index} width="50" height="50"
              className="squereCell"
            ></rect>
            <text className="squareCellText" x={coordX + 18} y={coordY + 30}>{++index}</text>
          </g>
        })}
      </svg>
    </div>
  )
}