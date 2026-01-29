export type TetrominoType = "I" | "O" | "T" | "S" | "Z" | "J" | "L";
export type Cell = TetrominoType | null;
export type Board = Cell[][];
export interface Position {
  x: number;
  y: number;
}
export interface Tetromino {
  type: TetrominoType;
  shape: number[][];
  position: Position;
}
export interface GameState {
  board: Board;
  currentPiece: Tetromino | null;
  nextPiece: Tetromino | null;
  score: number;
  level: number;
  lines: number;
  isGameOver: boolean;
  isPaused: boolean;
}
export type Direction = "left" | "right" | "down";
export type GameAction =
  | "MOVE_LEFT"
  | "MOVE_RIGTH"
  | "MOVE_DOWN"
  | "ROTATE"
  | "HADR_DROP"
  | "PAUSE"
  | "RESTART";
