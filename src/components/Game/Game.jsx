import React, { useState } from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { getWinnerIfAny } from '../../helpers/tic-tac-toe';

const Game = () => {
    const [historyBoards, setHistoryBoards] = useState([{
        configuration: Array(9).fill('.')
    }]); 
    const [currentState, setCurrentState] = useState(true);

    function handleSquareOnClick(i) {
        // Update board configuration 
        let newSquaresContents = historyBoards[historyBoards.length - 1].configuration.slice();
        newSquaresContents[i - 1] = currentState ? 'X' : 'O';
        setCurrentState(!currentState);
        setHistoryBoards((oldHistoryBoards) => [
            ...oldHistoryBoards,
            { 
                configuration: newSquaresContents 
            }
        ]);

        console.log(historyBoards);

        // Check for any potential winner
        let winner = getWinnerIfAny(newSquaresContents); 
        if (winner != null) {
            alert(`Winner is ${winner}`);
        }
    }

    return (
        <div className='game'>
            <div>
                <h3>Next player: { currentState === true ? 'X' : 'O' }</h3>
                <Board 
                    historyBoards={ historyBoards[historyBoards.length - 1].configuration }
                    onSquareClickHandler={ (i) => handleSquareOnClick(i) } 
                />
            </div>
        </div>
    );
}

export default Game;