import React from 'react';
import './styles.scss';
import { coordsOfBottomCells, coordinatesOfDozensCells, coordsOfStraights, BottomCellWidth, DozenCellWidth, StraightWidth } from './helpers'
import { DozensText, BottomCellsText } from './constans'

let BettingGrid = () => {
    return (
        <div>
            <svg className="betting-grid">
                {coordsOfStraights.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <rect className="square-cell" width={StraightWidth} height={StraightWidth} x={x} y={y}></rect>
                        <text className="cell-text" x={x} y={y}>{++idx}</text>
                    </g>
                })}
                {coordinatesOfDozensCells.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className='dozen-cell' width={DozenCellWidth} x={x} y={y}></rect>
                            <text className="cell-text" x={x + 100} y={y + 18}>{DozensText[idx]}</text>
                        </g>
                    </g>
                })}
                {coordsOfBottomCells.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="bottom-cell" width={BottomCellWidth} x={x} y={y}></rect>
                            <text className="cell-text" x={x + 50} y={y + 18}>{BottomCellsText[idx]}</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid