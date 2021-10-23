import React from 'react';
import './styles.scss';
import { coordinatesOfBottomCells, coordinatesOfDozensCells, coordinatesOfSquareCells } from './helpers'
import { DozensText, BottomCellsText, BottomCellWidth, DozenCellWidth, SquareCellWidth } from './constans'

let BettingGrid = () => {
    return (
        <div>
            <svg className="betting-grid">
                {coordinatesOfSquareCells.map((coords, idx) => {
                    let [coordX, coordY] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="square-cell" width={SquareCellWidth} x={coordX} y={coordY}></rect>
                            <text className="cell-text" x={coordX + 25} y={coordY + 30}>{++idx}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfDozensCells.map((coords, idx) => {
                    let [coordX, coordY] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className='dozen-cell' width={DozenCellWidth} x={coordX} y={coordY}></rect>
                            <text className="cell-text" x={coordX + 100} y={coordY + 18}>{DozensText[idx]}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfBottomCells.map((coords, idx) => {
                    let [coordX, coordY] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="bottom-cell" width={BottomCellWidth} x={coordX} y={coordY}></rect>
                            <text className="cell-text" x={coordX + 50} y={coordY + 18}>{BottomCellsText[idx]}</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid