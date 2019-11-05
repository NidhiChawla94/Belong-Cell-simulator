import Game from './Game';
import {CELL_SIZE, WIDTH, HEIGHT} from './Constants';

test('generates empty board of given row', () => {
    const gameObj = new Game();
    const rows = HEIGHT / CELL_SIZE;
    const cols = WIDTH/CELL_SIZE;
    let board = gameObj.makeEmptyBoard();
    expect(board.length).toBe(rows);
})
test('generates empty board of given cols', () => {
     const gameObj = new Game();
    const rows = HEIGHT / CELL_SIZE;
    const cols = WIDTH/CELL_SIZE;
    let board = gameObj.makeEmptyBoard();
    for(var row = 0; row<rows.length; row++ ) {
        expect(board[row].length).toBe(cols);
        
    }
}) 

test('ensure all cells are dead', () => {
    const gameObj = new Game();
    const rows = HEIGHT / CELL_SIZE;
    const cols = WIDTH/CELL_SIZE;
    let board = gameObj.makeEmptyBoard();
    for(var row = 0; row<rows.length; row++ ) {
       for(var colEle=0;colEle< cols.length; colEle++) {
           expect(board[colEle]).toBe(false);
       }
   }
}) 
