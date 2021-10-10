export const greedWidth: number = 600
export const greedHeight: number = 150
export const numberOfSquareCells: number = 36
export const numberOfSquereCellsRows: number = 3
export const coordinatesOfFirstSquareCell: Array<number> = [0, 100]
export const squereCellWidth: number = greedWidth / 12
export let numberOfDozensCells: number = 3
export let redSquareCeels: Array<number> = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].map(el => el - 1)
export let dozensText: Array<string> = ['1st 12', '2nd 12', '3nd 12']
export let bottomCellsText: Array<string> = ['1 to 18', 'EVEN', '', '', 'ODD', '19 to 36']
export let numberOfBottomCells: number = 6
export let squareCellWidth = greedWidth / (numberOfSquareCells / numberOfSquereCellsRows)
export let dozenCellWidth = greedWidth / numberOfDozensCells
export let bottomCellWidth = greedWidth / numberOfBottomCells