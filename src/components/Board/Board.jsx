import React, { useState } from 'react';
import './Board.scss';
import Square from '../Square/Square';

const Board = () => {
    const [squaresContents, setSquaresContents] = useState(Array(9).fill('.')); 
    const [currentState, setCurrentState] = useState(true);

    function handleSquareOnClick(i) {
        let newSquaresContents = squaresContents.slice();
        newSquaresContents[i - 1] = currentState ? 'X' : 'O';
        setCurrentState(!currentState);
        setSquaresContents(newSquaresContents);
    }

    function renderSquare(i) {
        return ( 
            <Square 
                value={squaresContents[i - 1]}
                onClickHandler={() => handleSquareOnClick(i)}
            /> 
        )
    }

    return (
        <div className='board'>
            <div className="row">
                { renderSquare(1) }
                { renderSquare(2) }
                { renderSquare(3) }    
            </div>
            
            <div className="row">
                { renderSquare(4) }
                { renderSquare(5) }
                { renderSquare(6) }
            </div>
            
            <div className="row">
                { renderSquare(7) }
                { renderSquare(8) }
                { renderSquare(9) }
            </div>
        </div>
    );
}

export default Board;