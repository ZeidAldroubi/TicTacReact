import { useState } from 'react';
import './App.css';

// Checks the eight possible winning lines and returns the winning player.
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [first, second, third] of lines) {
    if (squares[first] && squares[first] === squares[second] && squares[first] === squares[third]) {
      return squares[first];
    }
  }

  return null;
}

// Square is a presentational button that displays one board value.
function Square({ value, onSquareClick }) {
  return (
    <button className="square" type="button" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Board renders the grid and checks whether a clicked move is legal.
function Board({ squares, xIsNext, onPlay }) {
  const winner = calculateWinner(squares);

  // Copies the board before placing the next mark.
  const handleClick = (squareIndex) => {
    if (squares[squareIndex] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[squareIndex] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  return (
    <div className="board" role="grid" aria-label="Tic-Tac-Toe board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onSquareClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

// Game owns the current board and turn, and provides the restart action.
export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Saves a legal board update and switches the active player.
  const handlePlay = (nextSquares) => {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  // Restores the initial empty board and starts with X.
  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <main className="game-shell">
      <section className="game-card">
        <p className="eyebrow">Classic two-player game</p>
        <h1>Tic-Tac-Toe</h1>
        <p className="status" aria-live="polite">{status}</p>
        <Board squares={squares} xIsNext={xIsNext} onPlay={handlePlay} />
        <button className="restart-button" type="button" onClick={restartGame}>
          Restart
        </button>
      </section>
    </main>
  );
}