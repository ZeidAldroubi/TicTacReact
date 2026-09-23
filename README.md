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

I built the game logic and interface, including the restart button, draw message, status display, and custom visual theme.

## What I Learned

I learned how to use React state to store the board and track the active player. After each move, the app checks the eight possible winning lines and whether all nine squares are filled. The restart button resets the board and active player to their initial state.

## References

The game structure was based on the [official React Tic-Tac-Toe tutorial](https://react.dev/learn/tutorial-tic-tac-toe).
