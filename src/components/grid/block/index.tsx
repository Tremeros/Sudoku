import React, {FC} from 'react'
import {Container} from './styles'


interface IProps {
  colIndex: number
  rowIndex: number
}


const Block: FC<IProps> = ({rowIndex, colIndex}) => {


    return (
      <Container data-cy={`block-${colIndex}-${rowIndex}`}>0</Container>
    )
}

export default Block;