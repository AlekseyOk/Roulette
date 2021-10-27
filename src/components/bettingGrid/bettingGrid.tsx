import React from 'react';
import './styles.scss';
import { coordsOfBottomCells, dozensCoords, coordsOfStraights, BottomCellWidth, DozenWidth, StraightWidth, StraightHeight, DozenHeight } from './helpers'
import { DozensText, BottomCellsText } from './constans'

let BettingGrid = () => {
    return (
        <div>
            <svg className="betting-grid">
                {coordsOfStraights.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <rect className="square-cell" width={StraightWidth} height={StraightHeight} x={x} y={y}></rect>
                        <text className="cell-text" x={x+StraightWidth/2} y={y+StraightHeight/2}>{++idx}</text>
                    </g>
                })}
                {dozensCoords.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className='dozen-cell' width={DozenWidth} height={DozenHeight} x={x} y={y}></rect>
                            <text className="cell-text" x={x+DozenWidth/2} y={y+DozenHeight/2}>{DozensText[idx]}</text>
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