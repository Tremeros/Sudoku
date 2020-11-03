import styled, {css} from 'styled-components'

interface IProps {
  active?: boolean
}


export const Container = styled.div<IProps>`
  ${({active, theme}) => css`
     align-items: center;
     justify-content: center;
     background-color:${active ? theme.colors.blue : theme.colors.white};
     border: 1px solid ${theme.colors.black};
     cursor: pointer;
     display: flex;
     flex-grow: 1;
     flex-shrink: 0;
     flex-basis: 0;
     font-size: 20px;
     font-weight: bold;
     height: auto;
     transition: ${theme.transition};
     user-select: none;

     &:before {
         content: '';
         padding-top: 100%;
         float: left;
     }

     &:hover {
         background-color: ${theme.colors.lightBlue};
     }
  `}
`