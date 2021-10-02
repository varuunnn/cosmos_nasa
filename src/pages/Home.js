import React from 'react'
import '../App.css';
import Navbar from '../components/Navbar';
import Weather from '../components/weather'
import video from '../images/video.mp4'

const Home = ({ isLoggedIn }) => {
    return (
        <div className="container">
            <Navbar isLoggedIn={isLoggedIn} />
            <video autoPlay loop muted >
                <source src={video} type='video/mp4' />
            </ video>
            <Weather />
        </div>
    )
}

export default Home
