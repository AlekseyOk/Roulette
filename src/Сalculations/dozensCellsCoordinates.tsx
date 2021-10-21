import { GreedHeight, NumberOfDozensCells, SquereCellWidth } from '../variables'

let coordinatesOfDozensCells: Array<coordinatesOfDozensCell> = []
type coordinatesOfDozensCell = Array<number>
let coordinatesOfFirstDozenCell: Array<number> = [0, GreedHeight]

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

export default coordinatesOfDozensCells