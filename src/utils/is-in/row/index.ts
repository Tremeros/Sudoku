import {GRID, NUMBERS} from 'typings'
interface Iinput {
grid: GRID
row: number
value: NUMBERS
}

function isInRow({grid, row, value}: Iinput): boolean {
  return grid[row].includes(value)
}

export default isInRow