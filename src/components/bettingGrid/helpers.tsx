import { NumberOfBottomCells, SquereCellWidth, GridHeight, NumberOfDozensCells, NumberOfSquareCells, NumberOfSquereCellsRows, CoordinatesOfFirstSquareCell} from './variables'

export const coordinatesOfBottomCells: Array<coordinatesOfBottomCell> = []
type coordinatesOfBottomCell = Array<number>
const coordinatesOfFirstBottomCell: Array<number> = [0, SquereCellWidth * 3.5]

function generateBottomCellsCoordinates(): void {
  coordinatesOfBottomCells.push(coordinatesOfFirstBottomCell)
  let currentCoordinatesOfBottomCell: Array<number> = coordinatesOfFirstBottomCell
  for (let i = 1; i < NumberOfBottomCells; i++) {
    let [coordinateX, coordinateY] = currentCoordinatesOfBottomCell
    currentCoordinatesOfBottomCell = [coordinateX + (2 * SquereCellWidth), coordinateY]
    coordinatesOfBottomCells.push(currentCoordinatesOfBottomCell)
  }
}
generateBottomCellsCoordinates();


export const coordinatesOfDozensCells: Array<coordinatesOfDozensCell> = []
type coordinatesOfDozensCell = Array<number>
const coordinatesOfFirstDozenCell: Array<number> = [0, GridHeight]

function generateDozensCellsCoordinates(): void {
  coordinatesOfDozensCells.push(coordinatesOfFirstDozenCell)
  let currentCoordinatesOfDozenCell: Array<number> = coordinatesOfFirstDozenCell
  for (let i = 1; i < NumberOfDozensCells; i++) {
    let [coordinateX, coordinateY] = currentCoordinatesOfDozenCell
    currentCoordinatesOfDozenCell = [coordinateX + (4 * SquereCellWidth), coordinateY]
    coordinatesOfDozensCells.push(currentCoordinatesOfDozenCell)
  }
}
generateDozensCellsCoordinates();

export const coordinatesOfSquareCells: Array<coordinatesOfSquareCell> = []
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
      currentCoordinatesOfSquareCell = [currentCoordinateX + SquereCellWidth, GridHeight]
      currentnumberOfSquereCellsRows = 0
    }
  }
}

generateSquareCellsCoordinates()