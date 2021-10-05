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
                    index % 2 === 0 ? colorOfsquereCell = 'redSquereCell' : colorOfsquereCell = 'blackSquereCell'
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