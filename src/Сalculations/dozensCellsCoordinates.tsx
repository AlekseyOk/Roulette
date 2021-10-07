let greedHeight: number = 150
let coordinatesOfDozensCells: Array<coordinatesOfDozensCell> = []
type coordinatesOfDozensCell = Array<number>
let numberOfDozensCells: number = 3
let coordinatesOfFirstDozenCell: Array<number> = [0, greedHeight]
let greedWidth: number = 600
let oneCellWidth: number = greedWidth / 12

function generateDozensCellsCoordinates(): void {
  coordinatesOfDozensCells.push(coordinatesOfFirstDozenCell)
  let currentCoordinatesOfDozenCell: Array<number> = coordinatesOfFirstDozenCell
  for (let i = 1; i < numberOfDozensCells; i++) {
    let [coordinateX, coordinateY] = currentCoordinatesOfDozenCell
    currentCoordinatesOfDozenCell = [coordinateX + (4 * oneCellWidth), coordinateY]
    coordinatesOfDozensCells.push(currentCoordinatesOfDozenCell)
  }
}
generateDozensCellsCoordinates();

export default coordinatesOfDozensCells