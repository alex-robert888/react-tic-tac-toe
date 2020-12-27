import React, { useState } from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { getWinnerIfAny } from '../../helpers/tic-tac-toe';

const Game = () => {
    const [historyBoards, setSquaresContents] = useState(Array(9).fill('.')); 
    const [currentState, setCurrentState] = useState(true);

    function handleSquareOnClick(i) {
        // Update board configuration 
        let newSquaresContents = historyBoards.slice();
        newSquaresContents[i - 1] = currentState ? 'X' : 'O';
        setCurrentState(!currentState);
        setSquaresContents(newSquaresContents);

        // Check for any potential winner
        let winner = getWinnerIfAny(newSquaresContents); 
        if (winner != null) {
            alert(`Winner is ${winner}`);
        }
    }

    return (
        <div className='game'>
            <div>
                <h3>Next player: { currentState === true ? 'X' : 'O'}</h3>
                <Board 
                    historyBoards={historyBoards}
                    onSquareClickHandler={(i) => handleSquareOnClick(i)} 
                />
            </div>
        </div>
    );
}

export default Game;