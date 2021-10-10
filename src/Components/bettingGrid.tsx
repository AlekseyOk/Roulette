import React from 'react';
import './bettingGrid.scss';
import coordinatesOfSquareCells from '../Сalculations/squereCellsCoordinates'
import coordinatesOfDozensCells from '../Сalculations/dozensCellsCoordinates'
import coordinatesOfBottomCells from '../Сalculations/bottomСellsCoordinates'
import { redSquareCeels, dozensText, bottomCellsText, bottomCellWidth, dozenCellWidth, squareCellWidth } from '../variables'

let BettingGrid = () => {
    return (
        <div>
            <svg className="BettingGrid">
                {coordinatesOfSquareCells.map((squareCellCoordinates: Array<number>, index: number) => {
                    let [coordX, coordY] = squareCellCoordinates
                    let colorOfsquereCell: string = ''
                    redSquareCeels.includes(index) ? colorOfsquereCell = 'redSquereCell' : colorOfsquereCell = 'blackSquereCell'
                    return <g key={index}>
                        <g>
                            <rect className={colorOfsquereCell} width={squareCellWidth} x={coordX} y={coordY}></rect>
                            <text className="squareCellText" x={coordX + 18} y={coordY + 30}>{++index}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfDozensCells.map((dozensCellCoordinates: Array<number>, index: number) => {
                    let [coordX, coordY] = dozensCellCoordinates
                    return <g key={index}>
                        <g>
                            <rect className='dozenCell' width={dozenCellWidth} x={coordX} y={coordY}></rect>
                            <text className="dozenCellText" x={coordX + 78} y={coordY + 18}>{dozensText[index]}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfBottomCells.map((bottomCellCoordinates: Array<number>, index: number) => {
                    let [coordX, coordY] = bottomCellCoordinates
                    return <g key={index}>
                        <g>
                            <rect className={`bottomCell${index} bottomCell`} width={bottomCellWidth} x={coordX} y={coordY}></rect>
                            <text className="bottomCellText" x={coordX + 27} y={coordY + 18}>{bottomCellsText[index]}</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid