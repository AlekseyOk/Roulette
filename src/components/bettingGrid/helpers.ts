import { BottomCells, Dozens, Straights, StraightsRows, Columns, bottomCellsCoords, columnsCoords, dozensCoords, firstColumnCoords, straightsCoords, straightWidth, zeroWidth, BottomCellXportion, dozenHeight, DozenYportion, GridHeight, GridXYportion } from './constans'



type coords = Array<number>
let currentStraightsRows = 0

export const straightHeight = GridHeight * ((GridXYportion - DozenYportion - BottomCellXportion) / StraightsRows)
export const zeroHeight = 3 * straightHeight
export const columnHeight = straightHeight
const firstBottomCellCoords = [zeroWidth, 3 * straightHeight + dozenHeight]
const firstDozenCoords = [zeroWidth, 3 * straightHeight]

function generateStraightsCoords() {

const firstStraightCoords = [zeroWidth, (2 * straightHeight)]
let currentStraightCoords: Array<number> = firstStraightCoords
  straightsCoords.push(firstStraightCoords)
  currentStraightCoords = firstStraightCoords
  currentStraightsRows++
  for (let i = 1; i < Straights; i++) {
    let [x, y] = currentStraightCoords
    if (currentStraightsRows < StraightsRows) {
      let nextCoords = [x, y - straightHeight]
      straightsCoords.push(nextCoords)
      currentStraightCoords = nextCoords
      currentStraightsRows++
    }
    if (currentStraightsRows >= StraightsRows) {
      currentStraightCoords = [x + straightWidth, StraightsRows * straightHeight]
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
    dozenCurrentCoords = [x + (4 * straightWidth), y]
    dozensCoords.push(dozenCurrentCoords)
  }
}
generateDozensCoords();

function generateBottomCellsCoords() {
  bottomCellsCoords.push(firstBottomCellCoords)
  let bottomCellCurrentCoords = firstBottomCellCoords
  for (let i = 1; i < BottomCells; i++) {
    let [x, y] = bottomCellCurrentCoords
    bottomCellCurrentCoords = [x + (2 * straightWidth), y]
    bottomCellsCoords.push(bottomCellCurrentCoords)
  }
}
generateBottomCellsCoords();

function generateColumnsCoords() {
  columnsCoords.push(firstColumnCoords)
  let columnCurrentCoords = firstColumnCoords
  for (let i = 1; i < Columns; i++) {
    let [x, y] = columnCurrentCoords
    columnCurrentCoords = [x, y + columnHeight]
    columnsCoords.push(columnCurrentCoords)
  }
}
generateColumnsCoords();

const zeroCords: Array<coords> = [
  [zeroWidth, 0],
  [zeroWidth, straightHeight * 3],
  [zeroWidth / 1.5, straightHeight * 3],
  [zeroWidth / 2.4, straightHeight * 3],
  [zeroWidth / 1.5 - zeroWidth / 3, straightHeight * 3 - zeroWidth / 2.6],
  [1, straightHeight * 3 / 2],
  [zeroWidth / 3, zeroWidth / 1.5 - zeroWidth / 3],
  [zeroWidth / 2.4, 0],
  [zeroWidth / 1.5, 0],
  [zeroWidth, 0],
]


export const zeroPath = `M ${zeroCords[0]} ${zeroCords[1]} ${zeroCords[2]} Q ${zeroCords[3]} ${zeroCords[4]} L ${zeroCords[5]} ${zeroCords[6]} Q ${zeroCords[7]} ${zeroCords[8]} L ${zeroCords[9]}`

export const getTextCoords = (x: number, y: number, width: number, height: number) => {
  let [textX, textY] = [x + width / 2, y + height / 2]
  return [textX, textY]
}