import React from 'react'
import spinner from '../assets/spinner.gif'
import './loader.css'



const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="spinner" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader
