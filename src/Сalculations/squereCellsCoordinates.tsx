import { GreedHeight, NumberOfSquareCells, NumberOfSquereCellsRows, CoordinatesOfFirstSquareCell, SquereCellWidth } from '../variables'

const coordinatesOfSquareCells: Array<coordinatesOfSquareCell> = []
type coordinatesOfSquareCell = Array<number>
let currentCoordinatesOfSquareCell: Array<number> = CoordinatesOfFirstSquareCell
let currentnumberOfSquereCellsRows: number = 0;

function addCoordinatesOfFirstSquareCell() {
  coordinatesOfSquareCells.push(CoordinatesOfFirstSquareCell)
  currentCoordinatesOfSquareCell = CoordinatesOfFirstSquareCell
  currentnumberOfSquereCellsRows++
}

function generateSquareCellsCoordinates() {
  addCoordinatesOfFirstSquareCell()
  for (let i = 1; i < NumberOfSquareCells; i++) {
    let [currentCoordinateX, currentCoordinateY] = currentCoordinatesOfSquareCell
    if (currentnumberOfSquereCellsRows < NumberOfSquereCellsRows) {
      let coordinatesOfNextCell = [currentCoordinateX, currentCoordinateY - SquereCellWidth]
      coordinatesOfSquareCells.push(coordinatesOfNextCell)
      currentCoordinatesOfSquareCell = coordinatesOfNextCell
      currentnumberOfSquereCellsRows++
    }
    if (currentnumberOfSquereCellsRows >= NumberOfSquereCellsRows) {
      currentCoordinatesOfSquareCell = [currentCoordinateX + SquereCellWidth, GreedHeight]
      currentnumberOfSquereCellsRows = 0
    }
  }
}

generateSquareCellsCoordinates()

export default coordinatesOfSquareCells