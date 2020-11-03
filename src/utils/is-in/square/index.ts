import {NUMBERS, SQUARE} from 'typings'

interface Iinput {
    square: SQUARE
    value: NUMBERS
}

function isInSquare({square, value}: Iinput): boolean {
   return [...square[0], ...square[1], ...square[2]].includes(value)
} 

export default isInSquare