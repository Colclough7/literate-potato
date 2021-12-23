import React,{useState,useEffect} from 'react'
import Map from './components/Map.jsx'
import Loader from './components/Loader'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  const [eventData,setEventData] = useState([])
  const [loading,setLoading] = useState(false)
  const [showEvent,setShowEvent] = useState(false)
  const [fireEvent,setFireEvent] = useState(false)
  const [hurricaneEvent,setHurricaneEvent] = useState(false)
  const [volcanoEvent,setVolcanoEvent] = useState(false)
  const handleEvent = ()=>{
    setShowEvent(!showEvent)
  }
  const handleFire = ()=>{
    setFireEvent(!fireEvent)
  }
  const handleVolcano = ()=>{
    setVolcanoEvent(!volcanoEvent)
  }
  const handleHurricane = ()=>{
    setHurricaneEvent(!hurricaneEvent)
  }

  useEffect(()=>{
    const fetchEvents = async()=>{
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const {events} = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  },[])
  return (
    <div>
      <Header handleEvent={handleEvent}
       handleVolcano={handleVolcano} 
       handleHurricane={handleHurricane}
       handleFire={handleFire} />
     {!loading? <Map eventData={eventData}
                    showEvent={showEvent} 
                    fireEvent={fireEvent}
                    volcanoEvent={volcanoEvent}
                    hurricaneEvent={hurricaneEvent} />
                     : <Loader />}
    </div>
  );
}

export default App;
