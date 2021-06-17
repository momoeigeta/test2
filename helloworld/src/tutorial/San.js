import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const San = () => {

    const Square = ({ value, onClick, isHighlight }) => {
        const className = isHighlight ? 'square-highlight' : 'square';
        return (
            <button className={className}
                onClick={() => onClick()}>
                {value}
            </button>
        );
    };

    const Board = ({ squares, onClick, winLine }) => {
        const renderSquare = (i, isHighlight) => {
            return <Square value={squares[i]}
                onClick={() => onClick(i)}
                key={'index-' + i}
                isHighlight={isHighlight}
            />;
        };

        const squareBoard = [];
        const maxRow = 3;
        const maxCol = 3;
        for (let row = 0; row < maxRow; row++) {
            const rowBoard = [];
            for (let col = 0; col < maxCol; col++) {
                const index = maxCol * row + col;
                const isHighlight = winLine.includes(index);
                rowBoard.push(renderSquare(index, isHighlight));
            }
            squareBoard.push(
                <div className="board-row"
                    key={'row-' + row}
                >
                    {rowBoard}
                </div>
            );
        }

        return (
            <div>
                {squareBoard}
            </div>
        );
    };

    const Game = () => {
        const [history, setHistory] = useState([{
            squares: Array(9).fill(null),
            point: null
        }]);
        const [stepNumber, setStepNumber] = useState(0);
        const [xIsNext, setXIsNext] = useState(true);
        const [movesOrder, setMovesOrder] = useState(false);

        const handleClick = (i) => {
            const _history = history.slice(0, stepNumber + 1);
            const current = _history[_history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares).winner || squares[i]) {
                return;
            }
            squares[i] = xIsNext ? "X" : "O";

            setHistory(
                _history.concat(
                    [{
                        squares: squares,
                        point: i
                    }]
                ));
            setStepNumber(_history.length);
            setXIsNext(!xIsNext);
        };
        const jumpTo = (step) => {
            setStepNumber(step);
            setXIsNext(step % 2 === 0);
        };
        // const _history = history;
        const current = history[stepNumber];
        const { winner, winLine, isDraw } = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = "Winner : " + winner;
        } else {
            status = "Next player : " + (xIsNext ? "X" : "O");
        }

        if (isDraw) {
            status = "Draw";
        }
        const moves = history.map((step, move) => {
            const col = step.point % 3 + 1;
            const row = (step.point / 3 + 1) | 0;
            const goToMove = 'Go to move #' + move + '(' + col + ', ' + row + ')';
            const desc = move ? goToMove : 'Go to game start';
            return (
                <li key={move}>
                    <button
                        onClick={() => jumpTo(move)}
                        className={move === stepNumber ? 'bold' : ''}
                    >
                        {desc}
                    </button>
                </li>
            );
        });
        if (movesOrder) {
            moves.reverse();
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => handleClick(i)}
                        winLine={winLine}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => { setMovesOrder(!movesOrder) }}>
                        {'ASK ⇔ DESK'}
                    </button>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    };

    const calculateWinner = (squares) => {
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

        const result = {
            winner: null,
            winLine: [],
            isDraw: false,
        }

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] ===
                squares[c]) {
                result.winner = squares[a];
                result.winLine = result.winLine.concat(lines[i]);
            }
        }

        if (result.winner === null && !squares.includes(null)) {
            result.isDraw = true;
        }

        return result;
    };

    // ========================================

    ReactDOM.render(
        <Game />,
        document.getElementById('root')
    );

    return null;

};
export default San;