import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import '../css/Apod.css';

const Apod = () => {
  const apiKey = 'HUiJgdIHWzqeFXpza3twlqTaR6JGTCbgvgcCGxSJ';
  const [date, setDate] = useState(new Date());
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    const fetchPhoto = async() => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?start_date=${date.toISOString().split('T')[0]}&api_key=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setPhotoData(data[1]?data[1]:data[0]);
    }
    fetchPhoto();
  }, [date]);

  if (!photoData) return <div>Error</div>;

  return (
    <div className='apod'>
      <div className='header'>
        <h1>
            <strong
            >Astronomy Picture of the Day</strong>
          </h1>

          <p>
            Each day a different image or photograph of our fascinating universe
            is featured, along with a brief explanation written by a professional
            astronomer.
          </p>
      </div>
      <div className='datepicker'>
      <Calendar
        onChange={setDate}
        value={date}
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
