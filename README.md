# Rock Paper Scissors Game

This is a simple console-based Rock Paper Scissors game written in JavaScript. This project is part of The Odin Project curriculum.

## Description

This game allows you to play Rock Paper Scissors against the computer. The game plays five rounds and declares the winner based on the scores of those rounds.

## How to Play

1. The computer randomly selects one of "rock", "paper", or "scissors".
2. The player is prompted to input their choice.
3. The choices are compared, and the winner of the round is determined.
4. After five rounds, the overall winner is declared.

## Code Overview

- `getComputerChoice()`: Randomly selects and returns the computer's choice.
- `getHumanChoice()`: Prompts the player for their choice and returns it in lowercase.
- `playRound(computerChoice, humanChoice)`: Determines the winner of a round based on the choices made by the computer and the player.
- `playGame()`: Plays five rounds of the game.
- `winnerDecision()`: Declares the overall winner based on the scores.

## Usage

1. Clone the repository.
2. Open the `index.html` file in a web browser with the JavaScript console open.
3. Follow the prompts in the console to play the game.
