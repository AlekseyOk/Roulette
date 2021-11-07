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
                    let [textX, textY] = [x + straightWidth / 2, y + straightHeight / 1.9]
                    return <g key={idx} className="grid-cell">
                        <rect className="straight" width={straightWidth} height={straightHeight} x={x} y={y}></rect>
                        <text className="cell-text" x={textX} y={textY}>{++idx}</text>
                    </g>
                })}
                {dozensCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = [x + dozenWidth / 2, y + dozenHeight / 1.8]
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className='dozen-cell' width={dozenWidth} height={dozenHeight} x={x} y={y}></rect>
                            <text className="cell-text" x={textX} y={textY}>{DozensText[idx]}</text>
                        </g>
                    </g>
                })}
                {bottomCellsCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = [x + bottomCellWidth / 2, y + bottomCellHeight / 1.7]
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="bottom-cell" width={bottomCellWidth} height={bottomCellHeight} x={x} y={y}></rect>
                            <text className="cell-text" x={textX} y={textY}>{BottomCellsText[idx]}</text>
                        </g>
                    </g>
                })}
                {zeroCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = [x + zeroWidth / 1.9, y + zeroHeight / 1.97]
                    return <g key={idx} className="grid-cell">
                        <g>
                            <path className="zero-cell" d={zeroPath} x={x} y={y}></path>
                            <text className="cell-text" x={textX} y={textY}>0</text>
                        </g>
                    </g>
                })}
                {columnsCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = [x + columnWidth / 2, y + columnHeight / 1.9]
                    let transform = `rotate(-90 ${x + columnWidth / 2} ${y + columnHeight / 2})`
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="column-cell" width={columnWidth} height={columnHeight} x={x} y={y}></rect>
                            <text className="cell-text" transform={transform} x={textX} y={textY}>2to1</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid