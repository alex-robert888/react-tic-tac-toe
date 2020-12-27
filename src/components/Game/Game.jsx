import React, { useState } from 'react';
import './Game.scss';
import Board from '../Board/Board';


const Game = () => {
    // 0 => O's turn
    // 1 => X's turn 
    const [status, setStatus] = useState(1);

    return (
        <div className='game'>
            <div>
                <h3>Next player: { status === 1 ? 'X' : 'O'}</h3>
                <Board />
            </div>
        </div>
    );
}

export default Game;