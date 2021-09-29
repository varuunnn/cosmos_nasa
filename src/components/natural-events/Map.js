import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import IssInfoBox from './IssInfoBox'
import issIcon from '@iconify/icons-mdi/space-station'
import ISSMarker from './ISSMarker'

// define constants
//lat: 42.3265,
//lng: -122.8756
const NATURAL_EVENTS = [8, 10, 12, 15];

const Map = ({ eventData, center, zoom, position, setPosition }) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const [issInfo, setIssInfo] = useState(null)
  // const[position, setPosition] = useState(center)
  const getPosition = async() => {
    const res = await fetch('http://api.open-notify.org/iss-now.json')
    const { iss_position } = await res.json()
    setPosition(iss_position)
  }

  useEffect(() => {
    getPosition();
    const interval = setInterval(()=>{
      getPosition();
    }, 30000)

    return () => clearInterval(interval);
  }, [])

  const getAstros = async() => {
    const res = await fetch('http://api.open-notify.org/astros.json')
    const { people } = await res.json()
    setIssInfo(people);
    console.log(people)
  }

  const markers = eventData.map((ev, index) => {
    if(NATURAL_EVENTS.includes(ev.categories[0].id) && ev.geometries[0].type === "Point") {
      return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} eventId={ev.categories[0].id} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date })} />
    }
  return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAkzd3XLgZNSTyqVASO8wbLSu93QBA_ZJo' }}
        center={{
          lat: position.latitude,
          lng: position.longitude
        }}
        zoom={zoom}
      >
        {markers}
        <ISSMarker lat={center.lat} lng={center.lng} icon={issIcon} onClick={getAstros} />
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
      {issInfo && <IssInfoBox info={issInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 6
}

export default Map
