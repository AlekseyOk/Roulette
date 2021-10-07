import {greedHeight, numberOfSquareCells, numberOfRows, coordinatesOfFirstSquareCell, oneCellWidth} from '../variables'

const coordinatesOfSquareCells: Array<coordinatesOfSquareCell> = []
type coordinatesOfSquareCell = Array<number>
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

export default coordinatesOfSquareCells