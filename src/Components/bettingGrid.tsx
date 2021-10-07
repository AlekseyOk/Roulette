import React from 'react';
import coordinatesOfSquareCells from '../Сalculations/squereCellsCoordinates'
import coordinatesOfDozensCells from '../Сalculations/dozensCellsCoordinates'
import './bettingGrid.scss';

let BettingGrid = () => {
    return (
        <div>
            <svg className="BettingGrid">
                {coordinatesOfSquareCells.map((squareCellCoordinates: Array<number>, index: number) => {
                    let [coordX, coordY] = squareCellCoordinates
                    let colorOfsquereCell: string = ''
                    let redSquareCeels = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].map(el => el - 1)
                    redSquareCeels.includes(index) ? colorOfsquereCell = 'redSquereCell' : colorOfsquereCell = 'blackSquereCell'
                    return <g key={index}>
                        <g>
                            <rect className={colorOfsquereCell} x={coordX} y={coordY}></rect>
                            <text className="squareCellText" x={coordX + 18} y={coordY + 30}>{++index}</text>
                        </g>
                    </g>
                })}
                {coordinatesOfDozensCells.map((dozensCellCoordinates: Array<number>, index: number) => {
                    let dozensText = ['1st12', '2nd12', '3nd12']
                    let [coordX, coordY] = dozensCellCoordinates
                    return <g key={index}>
                        <g>
                            <rect className='dozenCell' x={coordX} y={coordY}></rect>
                            <text className="dozenCellText" x={coordX + 78} y={coordY + 30}>{dozensText[index]}</text>
                        </g>
                    </g>
                })}
            </svg>
        </div>
    )
}
export default BettingGrid