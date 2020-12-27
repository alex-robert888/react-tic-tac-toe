import React from 'react';
import './Board.scss';
import Square from '../Square/Square';

const Board = ({historyBoards, onSquareClickHandler}) => {
    function renderSquare(i) {
        return ( 
            <Square 
                value={historyBoards[i - 1]}
                onClickHandler={() => onSquareClickHandler(i)}
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