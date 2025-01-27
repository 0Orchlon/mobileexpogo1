import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player>(null);

  const handlePress = (row: number, col: number) => {
    if (board[row][col] || winner) return;

    const updatedBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? currentPlayer : cell))
    );

    setBoard(updatedBoard);

    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);

    const checkWinner = calculateWinner(updatedBoard);
    if (checkWinner) {
      setWinner(checkWinner);
      Alert.alert('Game Over', `${checkWinner} wins!`);
    } else if (isBoardFull(updatedBoard)) {
      Alert.alert('Game Over', 'It\'s a draw!');
    }
  };

  const calculateWinner = (board: Player[][]): Player | null => {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2])
        return board[i][0];
      if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i])
        return board[0][i];
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2])
      return board[0][0];
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0])
      return board[0][2];
    return null;
  };

  const isBoardFull = (board: Player[][]): boolean => {
    return board.every((row) => row.every((cell) => cell));
  };

  const resetGame = () => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={styles.cell}
                onPress={() => handlePress(rowIndex, colIndex)}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <Text style={styles.info}>
        {winner ? `${winner} wins!` : `Current Player: ${currentPlayer}`}
      </Text>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    backgroundColor: '#ddd',
    borderWidth: 2,
    borderColor: '#333',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#fff',
  },
  cellText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginTop: 20,
  },
  resetButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  resetText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TicTacToe;
