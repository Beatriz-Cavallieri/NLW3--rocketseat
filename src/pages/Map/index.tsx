import React from 'react'
import Location from '../../components/Location'
import './index.css'
import Logo from '../../images/Local.svg'
import MapMarker from '../../components/MapMarker'

export default function Map() {
    return (
        <div id="page-map">
            <div className="left-wrapper">
                <img src={Logo} alt="" />
                <h1>Escolha um orfanato no mapa</h1>
                <p>Muitas crianças estão esperando a sua visita :)</p>
                <Location />
            </div>
            <div className="map">
                <MapMarker />
            </div>
        </div>
    )
}
