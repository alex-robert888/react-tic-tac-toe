
/**
 * Provides the winner player if any
 * @param board The current board configuration
 * @returns "X", if X won 
 *          "O", if O won
 *          null, if no one won 
 */
export function getWinnerIfAny(board) {
    // Look for winnig configuration horizontally & vertically
    for (let i = 0; i < 3; ++i) {
        if (board[i * 3] !== '.' && board[i * 3] === board[i * 3 + 1] && board[i * 3 + 1] === board[i * 3 + 2]) {
            return board[i * 3];
        }
        if (board[i] !== '.' && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
            return board[i];
        }
    }

    // Look for winnig configuration diagonally
    if (board[0] !== '.' && board[0] === board[4] && board[4] === board[8]) {
        return board[0];
    }
    if (board[2] !== '.' && board[2] === board[4] && board[4] === board[6]) {
        return board[2];
    }
    return null;
}