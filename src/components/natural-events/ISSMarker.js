import React from 'react'
import { Icon } from '@iconify/react'

const ISSMarker = ({ lat, lng, icon, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={icon} color='black' className="location-icon" />
        </div>
    )
}

export default ISSMarker;
