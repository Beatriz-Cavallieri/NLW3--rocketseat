import styled from 'styled-components'

export const SquareButton = styled.button`
    background-color: ${props => `var(--${props})`};
    width: 80px;
    height: 80px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`