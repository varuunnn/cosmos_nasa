import React, { useState, useEffect } from 'react'
import date from 'date-and-time'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import video from '../images/video.mp4'
import Navbar from '../components/Navbar';

const Apod = ({ isLoggedIn }) => {
  const apiKey = 'HUiJgdIHWzqeFXpza3twlqTaR6JGTCbgvgcCGxSJ';
  const [d, setDate] = useState(new Date());

  const onDateChange = (newdate) => {
    setDate(newdate);
  }

  useEffect(() => {
    const fetchPhoto = async() => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?date=${date.format(d,'YYYY-MM-DD')}&api_key=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setPhotoData(data);
    }
    fetchPhoto();
  }, [d]);

  const [photoData, setPhotoData] = useState();
  if (!photoData) return <div>Error</div>;

  return (
    <div className='apod'>
      <Navbar isLoggedIn={isLoggedIn} />
      <video autoPlay loop muted >
                <source src={video} type='video/mp4' />
            </ video>
      <div className='apod-header'>
        <h1>
            <strong
            >Astronomy Picture of the Day</strong>
          </h1>

          {/* <p style={{fontSize: "1.5rem"}}>
            Each day a different image or photograph of our fascinating universe
            is featured, along with a brief explanation written by a professional
            astronomer.
          </p> */}
      </div>
      <div className='datepicker'>
      <Calendar
        onChange={onDateChange}
        locale={"en-US"}
        value={d}
      />
      </div>
      <div className="nasa-photo">
        {(photoData.media_type === "image") ? (
          <img
            src={photoData.url}
            alt={photoData.title}
            className="photo"
          />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default Apod;
