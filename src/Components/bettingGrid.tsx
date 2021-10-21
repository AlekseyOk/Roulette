import React from 'react';
import './bettingGrid.scss';
import coordinatesOfSquareCells from '../Сalculations/squereCellsCoordinates'
import coordinatesOfDozensCells from '../Сalculations/dozensCellsCoordinates'
import coordinatesOfBottomCells from '../Сalculations/bottomСellsCoordinates'
import { DozensText, BottomCellsText, BottomCellWidth, DozenCellWidth, SquareCellWidth } from '../variables'

let BettingGrid = () => {
    return (
        <div>
            <svg className="betting-grid">
                {coordinatesOfSquareCells.map((squareCellCoordinates, index) => {
                    let [coordX, coordY] = squareCellCoordinates
                    return <g key={index} className="grid-cell">
                        <g>
                            <rect className="square-cell" width={SquareCellWidth} x={coordX} y={coordY}></rect>
                            <text className="cell-text" x={coordX + 25} y={coordY + 30}>{++index}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfDozensCells.map((dozensCellCoordinates, index) => {
                    let [coordX, coordY] = dozensCellCoordinates
                    return <g key={index} className="grid-cell">
                        <g>
                            <rect className='dozen-cell' width={DozenCellWidth} x={coordX} y={coordY}></rect>
                            <text className="cell-text" x={coordX + 100} y={coordY + 18}>{DozensText[index]}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfBottomCells.map((bottomCellCoordinates, index) => {
                    let [coordX, coordY] = bottomCellCoordinates
                    return <g key={index} className="grid-cell">
                        <g>
                            <rect className="bottom-cell" width={BottomCellWidth} x={coordX} y={coordY}></rect>
                            <text className="cell-text" x={coordX + 50} y={coordY + 18}>{BottomCellsText[index]}</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid