import React,{useState,useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import FireLocationMarker from './FireLocationMarker.jsx'
import HurricaneLocationMarker from './HurricaneLocationMarker.jsx'
import VolcanoLocationMarker from './VolcanoLocationMarker.jsx'
import LocationInfoBox from './LocationInfoBox'
import './map.css'


const Map = ({eventData, center, zoom, showEvent, fireEvent, hurricaneEvent, volcanoEvent}) => {
    const [loactionInfo,setLocationInfo] = useState(null)
    const FireMarkers = eventData.map(event=>{
        if(event.categories[0].id === "wildfires"){
            return <FireLocationMarker key={event.id} lng={event.geometry[0].coordinates[0]} lat={event.geometry[0].coordinates[1]}
            onClick={()=>setLocationInfo({id: event.id, title: event.title})}/>
        }
        return null
    })
  const StormMarkers = eventData.map(event=>{
      if(event.categories[0].id === "severeStorms"){
         return <HurricaneLocationMarker key={event.id} lng={parseFloat(event.geometry.map(e=>e.coordinates[0]))} lat={parseFloat(event.geometry.map(e=>e.coordinates[1]))}
         onClick={()=>setLocationInfo({id: event.id, title: event.title})}/>
      }
      return null
  })
  const VolcanoMarkers = eventData.map(event=>{
      if(event.categories[0].id === "volcanoes"){
         return <VolcanoLocationMarker key={event.id} lng={event.geometry[0].coordinates[0]} lat={event.geometry[0].coordinates[1]}
         onClick={()=>setLocationInfo({id: event.id, title: event.title})}/>
      }  
        return null
  })
  useEffect(()=>{
    let timer = setTimeout(()=>setLocationInfo(false),5000)
    return () => {
        clearTimeout(timer);
      };
  },[loactionInfo])
    return (
        <div className="map">
           <GoogleMapReact bootstrapURLKeys={{key: process.env.REACT_APP_MY_APP_KEY}}
           defaultCenter={center} defaultZoom={zoom}>
              {showEvent || fireEvent?FireMarkers:null}
              {showEvent || hurricaneEvent?StormMarkers:null}
              {showEvent || volcanoEvent?VolcanoMarkers:null}
           </GoogleMapReact> 
           {loactionInfo&&<LocationInfoBox info={loactionInfo}/>}
        </div>
    )
}

export default Map


Map.defaultProps = {
    center: {
        lat: 33.748783,
        lng: -84.388168
    },
    zoom:5
}