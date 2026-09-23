# Tic-Tac-Toe

## Overview

A two-player React game with a 3x3 board, alternating X and O turns, winner detection, and protection against occupied-square moves or moves after a win.

## Run It

Requires [Node.js](https://nodejs.org/). From this folder, run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## My Contribution

Starting from the official tutorial's structure, I added:

Restart button — resets the board and active player back to their initial state.
Draw message — checks if all nine squares are filled with no winner, and displays "It's a draw!" instead of leaving the status blank.
Custom visual theme — replaced the tutorial's plain layout with a card-style board inside a centered game panel
## What I Learned

Building this project helped me understand how state and props work together in React. I learned that state should live in the component that owns the data (in this case, Game), while other components like Board and Square just receive that data through props and call functions to request changes, rather than managing their own state. I also learned why you should never mutate state directly — copying the squares array with .slice() before changing it keeps React's updates predictable. Overall, this project gave me a much clearer picture of how a UI updates in response to user interaction, one step at a time.
## References

The game structure was based on the [official React Tic-Tac-Toe tutorial](https://react.dev/learn/tutorial-tic-tac-toe).
