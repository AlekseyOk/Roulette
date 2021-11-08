import React from 'react';
import './styles.scss';
import { bottomCellsCoords, dozensCoords, straightsCoords, bottomCellWidth, dozenWidth, straightWidth, straightHeight, dozenHeight, bottomCellHeight, zeroCoords, zeroHeight, zeroWidth, columnsCoords, columnWidth, columnHeight, zeroPath } from './helpers'
import { DozensText, BottomCellsText } from './constans'

let BettingGrid = () => {
    let getTextCoords = (x: number, y: number, width: number, height: number) => {
        let [textX, textY] = [x + width / 2, y + height / 2]
        return [textX, textY]
    }
    return (
        <div>
            <svg className="betting-grid" >
                {straightsCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = getTextCoords(x, y, straightWidth, straightHeight)
                    return <g key={idx} className="grid-cell">
                        <rect className="straight" width={straightWidth} height={straightHeight} x={x} y={y}></rect>
                        <text className="cell-text" x={textX} y={textY} dy="3">{++idx}</text>
                    </g>
                })}
                {dozensCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = getTextCoords(x, y, dozenWidth, dozenHeight)
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className='dozen-cell' width={dozenWidth} height={dozenHeight} x={x} y={y}></rect>
                            <text className="cell-text" x={textX} y={textY} dy="3">{DozensText[idx]}</text>
                        </g>
                    </g>
                })}
                {bottomCellsCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = getTextCoords(x, y, bottomCellWidth, bottomCellHeight)
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="bottom-cell" width={bottomCellWidth} height={bottomCellHeight} x={x} y={y}></rect>
                            <text className="cell-text" x={textX} y={textY} dy="4">{BottomCellsText[idx]}</text>
                        </g>
                    </g>
                })}
                {zeroCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = getTextCoords(x, y, zeroWidth, zeroHeight)
                    return <g key={idx} className="grid-cell">
                        <g>
                            <path className="zero-cell" d={zeroPath} x={x} y={y}></path>
                            <text className="cell-text" x={textX} y={textY} dy="3">0</text>
                        </g>
                    </g>
                })}
                {columnsCoords.map((coords, idx) => {
                    let [x, y] = coords
                    let [textX, textY] = getTextCoords(x, y, columnWidth, columnHeight)
                    let transform = `rotate(-90 ${x + columnWidth / 2} ${y + columnHeight / 2})`
                    return <g key={idx} className="grid-cell">
                        <g>
                            <rect className="column-cell" width={columnWidth} height={columnHeight} x={x} y={y}></rect>
                            <text className="cell-text" transform={transform} x={textX} y={textY} dy="3">2to1</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid