import { greedHeight, numberOfDozensCells, squereCellWidth } from '../variables'

let coordinatesOfDozensCells: Array<coordinatesOfDozensCell> = []
type coordinatesOfDozensCell = Array<number>
let coordinatesOfFirstDozenCell: Array<number> = [0, greedHeight]

function generateDozensCellsCoordinates(): void {
  coordinatesOfDozensCells.push(coordinatesOfFirstDozenCell)
  let currentCoordinatesOfDozenCell: Array<number> = coordinatesOfFirstDozenCell
  for (let i = 1; i < numberOfDozensCells; i++) {
    let [coordinateX, coordinateY] = currentCoordinatesOfDozenCell
    currentCoordinatesOfDozenCell = [coordinateX + (4 * squereCellWidth), coordinateY]
    coordinatesOfDozensCells.push(currentCoordinatesOfDozenCell)
  }
}
generateDozensCellsCoordinates();

export default coordinatesOfDozensCells