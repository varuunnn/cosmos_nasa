import React, { useState, useEffect } from 'react';
import Map from './Map';
import Loader from './Loader';
import Header from './Header';
import Navbar from '../Navbar';

const NaturalEvents = ({ isLoggedIn }) => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const[position, setPosition] = useState({longitude: 0, latitude:0})
  const getPosition = async() => {
    const res = await fetch('http://api.open-notify.org/iss-now.json')
    const { iss_position } = await res.json()
    setPosition(iss_position)
  }

  useEffect(async() => {
    setLoading(true)
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
    }
    fetchEvents();
    getPosition();
    setLoading(false);
  }, [])

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn}/>
      { !loading ? <Map eventData={eventData} center={{ lat:position.latitude, lng:position.longitude }} zoom={4} position={position} setPosition={setPosition}/> : <Loader /> }
    </div>
  );
}

export default NaturalEvents;
