import { greedHeight, numberOfSquareCells, numberOfSquereCellsRows, coordinatesOfFirstSquareCell, squereCellWidth } from '../variables'

const coordinatesOfSquareCells: Array<coordinatesOfSquareCell> = []
type coordinatesOfSquareCell = Array<number>
let currentCoordinatesOfSquareCell: Array<number> = coordinatesOfFirstSquareCell
let currentnumberOfSquereCellsRows: number = 0;

function addCoordinatesOfFirstSquareCell() {
  coordinatesOfSquareCells.push(coordinatesOfFirstSquareCell)
  currentCoordinatesOfSquareCell = coordinatesOfFirstSquareCell
  currentnumberOfSquereCellsRows++
}

function generateSquareCellsCoordinates() {
  addCoordinatesOfFirstSquareCell()
  for (let i = 1; i < numberOfSquareCells; i++) {
    let [currentCoordinateX, currentCoordinateY] = currentCoordinatesOfSquareCell
    if (currentnumberOfSquereCellsRows < numberOfSquereCellsRows) {
      let coordinatesOfNextCell = [currentCoordinateX, currentCoordinateY - squereCellWidth]
      coordinatesOfSquareCells.push(coordinatesOfNextCell)
      currentCoordinatesOfSquareCell = coordinatesOfNextCell
      currentnumberOfSquereCellsRows++
    }
    if (currentnumberOfSquereCellsRows >= numberOfSquereCellsRows) {
      currentCoordinatesOfSquareCell = [currentCoordinateX + squereCellWidth, greedHeight]
      currentnumberOfSquereCellsRows = 0
    }
  }
}

generateSquareCellsCoordinates()

export default coordinatesOfSquareCells