import React, { useEffect, useState } from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { getWinnerIfAny } from '../../helpers/tic-tac-toe';

const Game = () => {
    const [boardsHistory, setHistoryBoards] = useState([{
        configuration: Array(9).fill('.')
    }]); 
    const [currentState, setCurrentState] = useState(true);
    const [currentBoardIndex, setCurrentBoardIndex] = useState(0);

    const historyButtons = boardsHistory.map((board, index) => {
        const buttonDescription = `Jump to #${index} board configuration`;
        return (
            <li key={index}>
                <button 
                    className="history-button"
                    onClick={ () => jumpToBoardConfiguration(index) }
                >
                    {buttonDescription}
                </button>
            </li>
        );
    }); 

    function jumpToBoardConfiguration(boardIndex) {
        setCurrentBoardIndex(boardIndex);
        setCurrentState(boardIndex % 2 === 0);
    }

    function deleteBoardConfigurationsStartingFromCurrentIndex() {
        boardsHistory.splice(currentBoardIndex + 1);
    }

    function handleSquareOnClick(i) {
        // If the currently selected board configuration is different from the 
        // most recent of the board configurations, then delete every board
        // configuration following the currently selected one
        deleteBoardConfigurationsStartingFromCurrentIndex();

        // Update board configuration 
        let newSquaresContents = boardsHistory[boardsHistory.length - 1].configuration.slice();
        newSquaresContents[i - 1] = currentState ? 'X' : 'O';
        setCurrentState(!currentState);
        setHistoryBoards((oldHistoryBoards) => [
            ...oldHistoryBoards,
            { 
                configuration: newSquaresContents 
            }
        ]);
        setCurrentBoardIndex(currentBoardIndex + 1);

        console.log(boardsHistory);

        // Check for any potential winner
        let winner = getWinnerIfAny(newSquaresContents); 
        if (winner != null) {
            alert(`Winner is ${winner}`);
        }
    }

    useEffect(() => {

    }, [currentBoardIndex])

    return (
        <div className='game'>
            <div>
                <h3>Next player: { currentState === true ? 'X' : 'O' }</h3>
                <Board 
                    boardsHistory={ boardsHistory[currentBoardIndex].configuration }
                    onSquareClickHandler={ (i) => handleSquareOnClick(i) } 
                />
                <ol>
                    {historyButtons}
                </ol>
            </div>
        </div>
    );
}

export default Game;