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

function generateSquareCellsCoordinates(): void {
  addCoordinatesOfFirstSquareCell()
  for (let i = 1; i < numberOfSquareCells; i++) {
    let [currentCoordinateX, currentCoordinateY] = currentCoordinatesOfSquareCell
    if (currentNumberOfRows < numberOfRows) {
      let coordinatesOfNextCell = [currentCoordinateX, currentCoordinateY - oneCellWidth]
      coordinatesOfSquareCells.push(coordinatesOfNextCell)
      currentCoordinatesOfSquareCell = coordinatesOfNextCell
      currentNumberOfRows++
    }
    if (currentNumberOfRows >= numberOfRows) {
      currentCoordinatesOfSquareCell = [currentCoordinateX + oneCellWidth, greedHeight]
      currentNumberOfRows = 0
    }
  }
}
generateSquareCellsCoordinates()

let SquareСellsGreed = () => {
  return (
    <div>
      <svg className="squareСellsGreed">
        {coordinatesOfSquareCells.map((squareCellCoordinates, index) => {
          let [coordX, coordY] = squareCellCoordinates
          return <g>
            <rect className="squereCell" x={coordX} y={coordY} key={index}></rect>
            <text className="squareCellText" x={coordX + 18} y={coordY + 30}>{++index}</text>
          </g>
        })}
      </svg>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="bettingGreed">
        <SquareСellsGreed />
      </div>
    </div>
  );
}

export default App