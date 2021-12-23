import React from 'react'
import {Icon} from '@iconify/react'
import FireLocationIcon from '@iconify/icons-mdi/fire-alert'
import HurricaneLocationIcon from '@iconify/icons-mdi/weather-hurricane'
import AllInclusive from '@iconify/icons-mdi/all-inclusive'
import './header.css'





const Header = ({handleEvent, handleFire, handleHurricane, handleVolcano}) => {
    return (
        <header className="header">
            <h1> Natural Disaster Tracker (Powered By NASA)</h1>
            <p>Click to see to see active disaster
                <span className="header-wrapper">
                <button className="header-button" onClick={handleFire} ><Icon icon={FireLocationIcon} className="header-icon fire"/><br/>Fire</button>
                <button className="header-button" onClick={handleHurricane}><Icon icon={HurricaneLocationIcon} className="header-icon hurricane"/><br/>Hurricane</button>
                <button className="header-button" onClick={handleVolcano}><Icon icon="wi:volcano" className="header-icon volcano"/><br/>Volcano</button>
                <button className="header-button" onClick={handleEvent}><Icon icon={AllInclusive} className="header-icon all"/><br/>All</button>
                </span>
            </p>
        </header>
    )
}

export default Header