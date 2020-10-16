import React from 'react'
import './index.css'
import Logo from '../../images/Logo.svg'
import styled from 'styled-components'
import Location from '../../components/Location'

const SquareButton = styled.button`
border: none;
    background-color: ${props => `var(--${props.color})`};
    width: 80px;
    height: 80px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`

export default function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={Logo} alt="Happy logo" />
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças</p>
                <div className="location">
                    <Location />
                </div>
                <SquareButton color="pale-yellow">
                    <img src="../../images/Arrow.svg" alt="Próxima página" />
                </SquareButton>
            </div>
        </div>
    )
}
