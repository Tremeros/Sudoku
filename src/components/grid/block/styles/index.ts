import styled, {css} from 'styled-components'


export const Container = styled.div`
  ${({theme}) => css`
     align-items: center;
     background-color:${theme.colors.white};
     border: 1px solid ${theme.colors.black};
     cursor: pointer;
     display: flex;
     flex-grow: 1;
     flex-shrink: 0;
     flex-basis: 0;
     font-size: 20px;
     font-weight: bold;
     height: auto;
     justyify-content: center;
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