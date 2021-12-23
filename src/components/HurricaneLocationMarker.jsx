import React from 'react'
import {Icon} from '@iconify/react'
import HurricaneLocationIcon from '@iconify/icons-mdi/weather-hurricane'
import './iconify.css'



const HurricaneLocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className="hurricane-location-marker" onClick={onClick}>
            <Icon icon={HurricaneLocationIcon} className="hurricane-location-icon"/>
        </div>
    )
}

export default HurricaneLocationMarker
