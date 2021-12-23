import React from 'react'
import {Icon} from '@iconify/react'
import './iconify.css'





const VolcanoLocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className="volcano-location-marker" onClick={onClick}>
            <Icon icon="wi:volcano" className="volcano-location-icon"/>
        </div>
    )
}

export default VolcanoLocationMarker
