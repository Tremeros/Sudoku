import {GRID, NUMBERS} from 'typings'

interface Iinput {
    col: number
    grid: GRID
    value: NUMBERS
}

function isInCol({col, grid, value}: Iinput): boolean {
  for (let i = 0; i < 9; i++) {
      if (value === grid[i][col]) {
         return true;
      }
  }

    return false;
} 

export default isInCol;