import React, {FC} from 'react'
import {Container} from './styles'
import {useSelector, useDispatch} from 'react-redux'
import {IReducer, selectBlock} from 'reducers'
import {N, INDEX} from 'typings'
import {Dispatch, AnyAction} from 'redux'


interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  value: N
}

const Block: FC<IProps> = ({rowIndex, colIndex}) => {
    const state = useSelector<IReducer, IState>(({grid, selectedBlock}) => ({
      isActive: selectedBlock ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex : false,
      value: grid ? grid[rowIndex][colIndex] : 0
    }))

    const dispatch = useDispatch<Dispatch<AnyAction>>()

    function handleClick() {
      if(!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
    }

    return (
      <Container active={state.isActive} data-cy={`block-${colIndex}-${rowIndex}`} onClick={handleClick}>{state.value === 0 ? '' : state.value}</Container>
    )
}

export default Block;