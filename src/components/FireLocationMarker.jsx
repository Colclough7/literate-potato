import React from 'react'
import {Icon} from '@iconify/react'
import FireLocationIcon from '@iconify/icons-mdi/fire-alert'
import './iconify.css'



const FireLocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className="fire-location-marker" onClick={onClick}>
            <Icon icon={FireLocationIcon} className="fire-location-icon"/>
        </div>
    )
}

export default FireLocationMarker
