import React from 'react'
import '../App.css';
import Weather from '../components/weather'
import video from '../images/video.mp4'

const Home = () => {
    return (
        <div className="container">
            <video autoPlay loop muted >
                <source src={video} type='video/mp4' />
            </ video>
            <Weather />
        </div>
    )
}

export default Home
