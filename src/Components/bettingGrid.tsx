import React from 'react';
import coordinatesOfSquareCells from '../Сalculations/cellsCoordinates'
import './bettingGrid.scss';

let BettingGrid = () => {
    return (
        <div>
            <svg className="squareСellsGrid">
                {coordinatesOfSquareCells.map((squareCellCoordinates: Array<number>, index: number) => {
                    let [coordX, coordY] = squareCellCoordinates
                    let colorOfsquereCell: string = ''
                    let redSquareCeels = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].map(el=>el-1)
                    redSquareCeels.includes(index) ? colorOfsquereCell = 'redSquereCell' : colorOfsquereCell = 'blackSquereCell'
                    return <g>
                        <g>
                            <rect className={colorOfsquereCell} x={coordX} y={coordY} key={index}></rect>
                            <text className="squareCellText" x={coordX + 18} y={coordY + 30}>{++index}</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid