export const greedWidth = 600
export const greedHeight = 150
export const numberOfSquareCells = 36
export const numberOfSquereCellsRows = 3
export const coordinatesOfFirstSquareCell = [0, 100]
export const squereCellWidth = greedWidth / 12
export let numberOfDozensCells = 3
export let redSquareCeels = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].map(el => el - 1)
export let dozensText = ['1st 12', '2nd 12', '3nd 12']
export let bottomCellsText = ['1 to 18', 'EVEN', '', '', 'ODD', '19 to 36']
export let numberOfBottomCells = 6
export let squareCellWidth = greedWidth / (numberOfSquareCells / numberOfSquereCellsRows)
export let dozenCellWidth = greedWidth / numberOfDozensCells
export let bottomCellWidth = greedWidth / numberOfBottomCells