import { numberOfBottomCells, oneCellWidth } from '../variables'

let coordinatesOfBottomCells: Array<coordinatesOfBottomCell> = []
type coordinatesOfBottomCell = Array<number>
let coordinatesOfFirstBottomCell: Array<number> = [0, oneCellWidth * 3.5]

function generateBottomCellsCoordinates(): void {
  coordinatesOfBottomCells.push(coordinatesOfFirstBottomCell)
  let currentCoordinatesOfBottomCell: Array<number> = coordinatesOfFirstBottomCell
  for (let i = 1; i < numberOfBottomCells; i++) {
    let [coordinateX, coordinateY] = currentCoordinatesOfBottomCell
    currentCoordinatesOfBottomCell = [coordinateX + (2 * oneCellWidth), coordinateY]
    coordinatesOfBottomCells.push(currentCoordinatesOfBottomCell)
  }
}
generateBottomCellsCoordinates();

export default coordinatesOfBottomCells