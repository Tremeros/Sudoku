import React, { FC, Children} from 'react'
import {createFullGrid, fillGrid} from 'utils'
import {GRID} from 'typings'
import Block from './block'
import {Container, Row} from './styles'


const Grid: FC = () => {
const grid = createFullGrid()
console.log(grid)

  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => <Block colIndex={colIndex} rowIndex={rowIndex}/>)
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
