import React from 'react';
import './bettingGrid.scss';
import coordinatesOfSquareCells from '../Сalculations/squereCellsCoordinates'
import coordinatesOfDozensCells from '../Сalculations/dozensCellsCoordinates'
import coordinatesOfBottomCells from '../Сalculations/bottomСellsCoordinates'
import { redSquareCeels, dozensText, bottomCellsText, bottomCellWidth, dozenCellWidth, squareCellWidth } from '../variables'

let BettingGrid = () => {
    return (
        <div>
            <svg className="bettingGrid">
                {coordinatesOfSquareCells.map((squareCellCoordinates, index) => {
                    let [coordX, coordY] = squareCellCoordinates
                    return <g key={index} className="squareCellsGrid">
                        <g>
                            <rect className={`squareCell`} width={squareCellWidth} x={coordX} y={coordY}></rect>
                            <text className="squareCellText" x={coordX + 25} y={coordY + 30}>{++index}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfDozensCells.map((dozensCellCoordinates, index) => {
                    let [coordX, coordY] = dozensCellCoordinates
                    return <g key={index}>
                        <g>
                            <rect className='dozenCell' width={dozenCellWidth} x={coordX} y={coordY}></rect>
                            <text className="dozenCellText" x={coordX + 100} y={coordY + 18}>{dozensText[index]}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfBottomCells.map((bottomCellCoordinates, index) => {
                    let [coordX, coordY] = bottomCellCoordinates
                    return <g key={index}>
                        <g>
                            <rect className={`bottomCell${index} bottomCell`} width={bottomCellWidth} x={coordX} y={coordY}></rect>
                            <text className="bottomCellText" x={coordX + 50} y={coordY + 18}>{bottomCellsText[index]}</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid