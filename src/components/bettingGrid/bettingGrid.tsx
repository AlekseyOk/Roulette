import React from 'react';
import './styles.scss';
import { bottomCellsCoords, dozensCoords, straightsCoords, bottomCellWidth, dozenWidth, straightWidth, straightHeight, dozenHeight, bottomCellHeight, zeroCoords, zeroHeight, zeroWidth, columnsCoords, columnWidth, columnHeight, zeroPath } from './helpers'
import { DozensText, BottomCellsText } from './constans'

let BettingGrid = () => {
    return (
        <div>
            <svg className="betting-grid" >
                {straightsCoords.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <rect className="straight" width={straightWidth} height={straightHeight} x={x} y={y}></rect>
                        <text className="cell-text" x={x+straightWidth/2} y={y+straightHeight/2}>{++idx}</text>
                    </g>
                })}
                {dozensCoords.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className='dozen-cell' width={dozenWidth} height={dozenHeight} x={x} y={y}></rect>
                            <text className="cell-text" x={x+dozenWidth/2} y={y+dozenHeight/2}>{DozensText[idx]}</text>
                        </g>
                    </g>
                })}
                {bottomCellsCoords.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="bottom-cell" width={bottomCellWidth} height={bottomCellHeight} x={x} y={y}></rect>
                            <text className="cell-text" x={x+bottomCellWidth/2} y={y+bottomCellHeight/2}>{BottomCellsText[idx]}</text>
                        </g>
                    </g>
                })}
                {zeroCoords.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <path className="zero-cell" d={zeroPath} x={x} y={y}></path>
                            <text className="cell-text" x={x+zeroWidth/2} y={y+zeroHeight/2}>0</text>
                        </g>
                    </g>
                })}
                 {columnsCoords.map((coords, idx) => {
                    let [x, y] = coords
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="column-cell" width={columnWidth} height={columnHeight} x={x} y={y}></rect>
                            <text className="cell-text" transform={`rotate(-90 ${x+columnWidth/2} ${y+columnHeight/2})`} x={x+columnWidth/2} y={y+columnHeight/2}>2to1</text>
                        </g>
                    </g>
                })}
            </svg>
            <svg width="440" height="440">
  <path d="M100,100 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z" fill="none" stroke="black" stroke-width="3" />
</svg>
        </div>
    )
}
export default BettingGrid