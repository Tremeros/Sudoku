import React, { FC, useCallback, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {createFullGrid, fillGrid} from 'utils'
import {GRID, INDEX} from 'typings'
import Block from './block'
import {Container, Row} from './styles'
import {Dispatch, AnyAction} from 'redux'
import {createGrid} from 'reducers'


const Grid: FC = () => {
const dispatch = useDispatch<Dispatch<AnyAction>>()
const create = useCallback(() => dispatch(createGrid()), [dispatch])
useEffect(() => {
   create()
}, [create])
  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => <Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX}/>)
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
