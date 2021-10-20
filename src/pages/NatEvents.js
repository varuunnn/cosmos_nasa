import React from 'react'
import NaturalEvents from '../components/natural-events/index';

const NatEvents = ({ isLoggedIn }) => {
    return (
        <div>
            <NaturalEvents isLoggedIn={isLoggedIn}/>
        </div>
    )
}

export default NatEvents
