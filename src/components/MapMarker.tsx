import React from 'react'
import Local from '../images/Local.svg'
import styled from 'styled-components'

const Tag = styled.div`
    background-color: white;
    color: var(--blue-main);
`

export default function MapMarker() {
    return (
        <div>
            <img src={Local} alt="" />
            <Tag>
                Orf. Esperança
            </Tag>
        </div>
    )
}
