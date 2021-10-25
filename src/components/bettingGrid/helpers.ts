import { BottomCells, GridHeight, Dozens, Straights, StraightsRows, GridWidth, ColumnWidth, ZeroWidth} from './constans'

export const StraightWidth = GridWidth / (ZeroWidth + (Straights/StraightsRows) + ColumnWidth)
export const DozenCellWidth = GridWidth / Dozens
export const BottomCellWidth = GridWidth / BottomCells
export const CoordsOfFirstStraight = [0, (2*StraightWidth)]
export const coordsOfBottomCells: Array<coordsOfBottomCell> = []
type coordsOfBottomCell = Array<number>
const coordsOfFirstBottomCell = [0, StraightWidth * 3.5]

export const coordinatesOfDozensCells: Array<coordinatesOfDozensCell> = []
type coordinatesOfDozensCell = Array<number>
const coordinatesOfFirstDozenCell = [0, GridHeight]

export const coordsOfStraights: Array<coordsOfStraights> = []
type coordsOfStraights = Array<number>
let currentCoordsOfStraights: Array<number> = CoordsOfFirstStraight
let currentStraightsRows = 0;

function addCoordsOfFirstStraight() {
  coordsOfStraights.push(CoordsOfFirstStraight)
  currentCoordsOfStraights = CoordsOfFirstStraight
  currentStraightsRows++
}

function generateStraightsCoords() {
  addCoordsOfFirstStraight()
  for (let i = 1; i < Straights; i++) {
    let [x, y] = currentCoordsOfStraights
    if (currentStraightsRows < StraightsRows) {
      let coordinatesOfNextCell = [x, y - StraightWidth]
      coordsOfStraights.push(coordinatesOfNextCell)
      currentCoordsOfStraights = coordinatesOfNextCell
      currentStraightsRows++
    }
    if (currentStraightsRows >= StraightsRows) {
      currentCoordsOfStraights = [x + StraightWidth, 3*StraightWidth]
      currentStraightsRows = 0
    }
  }
}

generateStraightsCoords()

function generateDozensCellsCoordinates() {
  coordinatesOfDozensCells.push(coordinatesOfFirstDozenCell)
  let currentCoordinatesOfDozenCell = coordinatesOfFirstDozenCell
  for (let i = 1; i < Dozens; i++) {
    let [coordinateX, coordinateY] = currentCoordinatesOfDozenCell
    currentCoordinatesOfDozenCell = [coordinateX + (4 * StraightWidth), coordinateY]
    coordinatesOfDozensCells.push(currentCoordinatesOfDozenCell)
  }
}
generateDozensCellsCoordinates();

function generateBottomCellsCoords() {
  coordsOfBottomCells.push(coordsOfFirstBottomCell)
  let currentcoordsOfBottomCell = coordsOfFirstBottomCell
  for (let i = 1; i < BottomCells; i++) {
    let [coordinateX, coordinateY] = currentcoordsOfBottomCell
    currentcoordsOfBottomCell = [coordinateX + (2 * StraightWidth), coordinateY]
    coordsOfBottomCells.push(currentcoordsOfBottomCell)
  }
}
generateBottomCellsCoords();