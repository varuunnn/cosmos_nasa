import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert'
import stormIcon from '@iconify/icons-ri/thunderstorms-line';
import volcanoIcon from '@iconify/icons-noto/volcano';
import icebergIcon from '@iconify/icons-openmoji/iceberg';

//constants
const icons = {
    8: fireIcon,
    10: stormIcon,
    12: volcanoIcon,
    15: icebergIcon
}

//function
const LocationMarker = ({ lat, lng, eventId, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={icons[eventId]} className="location-icon" />
        </div>
    )
}

export default LocationMarker
