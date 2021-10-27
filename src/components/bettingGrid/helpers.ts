import { BottomCells, GridHeight, Dozens, Straights, StraightsRows, GridWidth, ColumnPortion, ZeroPortion, GridPortion, StraightYPortion } from './constans'

export const DozenPortion = (GridPortion - (3 * StraightYPortion )) / 2 
export const BottomCellPortion = 0.25
export const StraightWidth = GridWidth / (ZeroPortion + (Straights / StraightsRows) + ColumnPortion)
export const StraightHeight = GridHeight * ((GridPortion - DozenPortion - BottomCellPortion) / StraightsRows)
export const DozenWidth = GridWidth / (ZeroPortion + Dozens + ColumnPortion)
export const DozenHeight = GridHeight * DozenPortion
export const BottomCellWidth = GridWidth / BottomCells
export const firstStraightCoords = [0, (2 * StraightHeight)]
export const coordsOfBottomCells: Array<coordsOfBottomCell> = []
const firstBottomCellCoords = [0, StraightHeight * (StraightsRows + DozenPortion + BottomCellPortion)]
export const dozensCoords: Array<dozensCoords> = []
const firstDozenCoords = [0, 3 * StraightHeight]
export const coordsOfStraights: Array<coordsOfStraights> = []
let currentStraightCoords: Array<number> = firstStraightCoords
let currentStraightsRows = 0;
type coordsOfStraights = Array<number>
type coordsOfBottomCell = Array<number>
type dozensCoords = Array<number>

function addfirstStraightCoords() {
  coordsOfStraights.push(firstStraightCoords)
  currentStraightCoords = firstStraightCoords
  currentStraightsRows++
}

function generateStraightsCoords() {
  addfirstStraightCoords()
  for (let i = 1; i < Straights; i++) {
    let [x, y] = currentStraightCoords
    if (currentStraightsRows < StraightsRows) {
      let nextCoords = [x, y - StraightHeight]
      coordsOfStraights.push(nextCoords)
      currentStraightCoords = nextCoords
      currentStraightsRows++
    }
    if (currentStraightsRows >= StraightsRows) {
      currentStraightCoords = [x + StraightWidth, StraightsRows * StraightHeight]
      currentStraightsRows = 0
    }
  }
}

generateStraightsCoords()

function generateDozensCoords() {
  dozensCoords.push(firstDozenCoords)
  let dozenCurrentCoords = firstDozenCoords
  for (let i = 1; i < Dozens; i++) {
    let [x, y] = dozenCurrentCoords
    dozenCurrentCoords = [x + (4 * StraightWidth), y]
    dozensCoords.push(dozenCurrentCoords)
  }
}
generateDozensCoords();

// function generateBottomCellsCoords() {
//   coordsOfBottomCells.push(firstBottomCellCoords)
//   let bottomCellCurrentCoords = firstBottomCellCoords
//   for (let i = 1; i < BottomCells; i++) {
//     let [x, y] = bottomCellCurrentCoords
//     bottomCellCurrentCoords = [x + (2 * StraightWidth), y]
//     coordsOfBottomCells.push(bottomCellCurrentCoords)
//   }
// }
// generateBottomCellsCoords();