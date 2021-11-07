import { BottomCells, GridHeight, Dozens, Straights, StraightsRows, GridWidth, ColumnXportion, ZeroXportion, GridXYportion, StraightYPortion, Columns } from './constans'

const DozenYportion = (GridXYportion - (3 * StraightYPortion)) / 2
const BottomCellYportion = DozenYportion
const BottomCellXportion = (GridXYportion - StraightYPortion * 3) / 2
export const straightWidth = GridWidth / (ZeroXportion + (Straights / StraightsRows) + ColumnXportion)
export const straightHeight = GridHeight * ((GridXYportion - DozenYportion - BottomCellXportion) / StraightsRows)
export const dozenWidth = 4 * straightWidth
export const dozenHeight = GridHeight * DozenYportion
export const bottomCellWidth = straightWidth * 2
export const bottomCellHeight = GridHeight * BottomCellYportion
export const zeroWidth = straightWidth
export const zeroHeight = 3 * straightHeight
export const columnWidth = ColumnXportion * straightWidth
export const columnHeight = straightHeight
const firstStraightCoords = [zeroWidth, (2 * straightHeight)]
export const bottomCellsCoords: Array<coords> = []
export const columnsCoords: Array<coords> = []
const firstBottomCellCoords = [zeroWidth, 3 * straightHeight + dozenHeight]
export const dozensCoords: Array<coords> = []
const firstDozenCoords = [zeroWidth, 3 * straightHeight]
export const straightsCoords: Array<coords> = []
export const firstColumnCoords = [zeroWidth + straightWidth * 12, 0]
let currentStraightCoords: Array<number> = firstStraightCoords
let currentStraightsRows = 0;
type coords = Array<number>
export const zeroCoords = [[0, 0]]

function addfirstStraightCoords() {
  straightsCoords.push(firstStraightCoords)
  currentStraightCoords = firstStraightCoords
  currentStraightsRows++
}

function generateStraightsCoords() {
  addfirstStraightCoords()
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

const zeroCords:Array<coords> = []
zeroCords.push([zeroWidth, 0])
zeroCords.push([zeroWidth, straightHeight*3])
zeroCords.push([zeroWidth/1.5, straightHeight*3])
zeroCords.push([GridHeight/10, straightHeight*3])
zeroCords.push([zeroWidth/1.5-zeroWidth/3, straightHeight*3-GridWidth/50])
zeroCords.push([1, straightHeight*3/2])
zeroCords.push([zeroWidth/3, zeroWidth/1.5-zeroWidth/3])
zeroCords.push([GridHeight/10, 0])
zeroCords.push([zeroWidth/1.5, 0])
zeroCords.push([zeroWidth, 0])

export let zeroPath = `M ${zeroCords[0]} ${zeroCords[1]} ${zeroCords[2]} Q ${zeroCords[3]} ${zeroCords[4]} L${zeroCords[5]} ${zeroCords[6]} Q ${zeroCords[7]} ${zeroCords[8]} L ${zeroCords[9]}`