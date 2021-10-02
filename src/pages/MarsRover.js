import React, { useState, useEffect } from 'react';
import video from '../images/video.mp4'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Button, MenuItem, Select, InputLabel } from '@material-ui/core';
import Navbar from '../components/Navbar';

const obj1 = { "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active", "max_sol": 3202, "max_date": "2021-08-09", "total_photos": 511893, "cameras": [{ "name": "FHAZ", "full_name": "Front Hazard Avoidance Camera" }, { "name": "NAVCAM", "full_name": "Navigation Camera" }, { "name": "MAST", "full_name": "Mast Camera" }, { "name": "CHEMCAM", "full_name": "Chemistry and Camera Complex" }, { "name": "MAHLI", "full_name": "Mars Hand Lens Imager" }, { "name": "MARDI", "full_name": "Mars Descent Imager" }, { "name": "RHAZ", "full_name": "Rear Hazard Avoidance Camera" }] } }
const obj2 = { "photos": [{ "id": 727, "sol": 0, "camera": { "id": 20, "name": "FHAZ", "rover_id": 5, "full_name": "Front Hazard Avoidance Camera" }, "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FRA_397502305EDR_D0010000AUT_04096M_.JPG", "earth_date": "2012-08-06", "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active" } }, { "id": 9720, "sol": 0, "camera": { "id": 20, "name": "FHAZ", "rover_id": 5, "full_name": "Front Hazard Avoidance Camera" }, "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FRA_397506083EDR_F0010008AUT_04096M_.JPG", "earth_date": "2012-08-06", "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active" } }, { "id": 9721, "sol": 0, "camera": { "id": 20, "name": "FHAZ", "rover_id": 5, "full_name": "Front Hazard Avoidance Camera" }, "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FLA_397506083EDR_F0010008AUT_04096M_.JPG", "earth_date": "2012-08-06", "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active" } }, { "id": 9722, "sol": 0, "camera": { "id": 20, "name": "FHAZ", "rover_id": 5, "full_name": "Front Hazard Avoidance Camera" }, "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FLA_397504830EDR_F0010000AUT_04096M_.JPG", "earth_date": "2012-08-06", "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active" } }, { "id": 9723, "sol": 0, "camera": { "id": 20, "name": "FHAZ", "rover_id": 5, "full_name": "Front Hazard Avoidance Camera" }, "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FRA_397504830EDR_F0010000AUT_04096M_.JPG", "earth_date": "2012-08-06", "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active" } }, { "id": 9724, "sol": 0, "camera": { "id": 20, "name": "FHAZ", "rover_id": 5, "full_name": "Front Hazard Avoidance Camera" }, "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FRA_397506068EDR_D0010008AUT_04096M_.JPG", "earth_date": "2012-08-06", "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active" } }, { "id": 9725, "sol": 0, "camera": { "id": 20, "name": "FHAZ", "rover_id": 5, "full_name": "Front Hazard Avoidance Camera" }, "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FLA_397506068EDR_D0010008AUT_04096M_.JPG", "earth_date": "2012-08-06", "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active" } }, { "id": 9726, "sol": 0, "camera": { "id": 20, "name": "FHAZ", "rover_id": 5, "full_name": "Front Hazard Avoidance Camera" }, "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FLA_397502305EDR_D0010000AUT_04096M_.JPG", "earth_date": "2012-08-06", "rover": { "id": 5, "name": "Curiosity", "landing_date": "2012-08-06", "launch_date": "2011-11-26", "status": "active" } }] }
var earthDate = obj2.photos[0].earth_date;
var camFullName = obj2.photos[0].camera.full_name;
var images = obj2.photos;

const MarsRover = ({ isLoggedIn }) => {
  const apiKey = 'HUiJgdIHWzqeFXpza3twlqTaR6JGTCbgvgcCGxSJ';
  const [solData, setSolData] = useState(obj2);
  const [roverName, setRoverName] = useState('Curiosity');
  const [solValue, setSolValue] = useState(0);
  const [value, setValue] = useState(0);
  const [roverData, setRoverData] = useState(obj1);
  const [cam, setCam] = useState("FHAZ");
  const [camVal, setCamVal] = useState("FHAZ");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName.toLowerCase()}/?&api_key=${apiKey}`
      )
        .then(res => res.json())
        .then((data) => setRoverData(data))
        .catch(err => console.log(err));
    }
    fetchData();
  }, [roverName]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName.toLowerCase()}/photos?sol=${solValue}&camera=${camVal.toLowerCase()}&api_key=${apiKey}`
      )
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          camFullName = data.photos.length !== 0 ? data.photos[0].camera.full_name : "";
          earthDate = data.photos.length !== 0 ? data.photos[0].earth_date : "NA";
          images = data.photos.length !== 0 ? data.photos : null;
          setSolData(data);
        })
        .catch(err => console.log(err));
    }
    fetchData();
  }, [solValue, camVal]);

  const handleRoverChange = (event) => {
    setRoverName(event.target.value);
    setValue(0);
    setSolValue(0);
  };

  const handleCamChange = (e) => {
    setCam(e.target.value);
  }

  const solSubmit = (e) => {
    e.preventDefault();
    setSolValue(value);
    setCamVal(cam);
  }

  const solChange = (e) => {
    setValue(e.target.value);
  }

  // if (!camData) return <div>Error</div>;

  return (
    <div className='marsrover'>
      <Navbar isLoggedIn={isLoggedIn} />
      <video autoPlay loop muted >
        <source src={video} type='video/mp4' />
      </ video>
      <center><h1>Mars Rover</h1></center>
      <div className='main'>
        <div className='rover_select'>
          <h5>Select a rover</h5><br />
          <FormControl component="fieldset">
            <RadioGroup aria-label="rover" name="rover" value={roverName} onChange={handleRoverChange}>
              <FormControlLabel value="Curiosity" control={<Radio color="primary" />} label="Curiosity" />
              <FormControlLabel value="Opportunity" control={<Radio color="primary" />} label="Opportunity" />
              <FormControlLabel value="Spirit" control={<Radio color="primary" />} label="Spirit" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='rover_info'>
          <h5>Rover name: {roverName}</h5><br />
          Launched on: {roverData.rover.launch_date}<br />
          Landed on: {roverData.rover.landing_date}<br />
          Max Sol: {roverData.rover.max_sol}
        </div>
        <div className='sol_select'>
          <h5>Sol - {solValue}</h5>
          Earth date: {earthDate}<br /><br />
          <div >
            <form onSubmit={solSubmit}>
              <div className="inputs">
                <TextField
                  label="Enter Sol"
                  variant="outlined"
                  color="primary"
                  value={value}
                  style={{ marginRight: "1rem" }}
                  InputProps={{ inputProps: { min: 0, max: roverData.rover.max_sol } }}
                  focused={true}
                  type="number"
                  onChange={solChange}
                />
                <FormControl variant="outlined" focused={true}>
                  <InputLabel shrink>Select Camera</InputLabel>
                  <Select label="Select Camera" value={cam} onChange={handleCamChange} style={{ width: 150 }}>
                    {roverData.rover.cameras.map((data) => {
                      return <MenuItem value={data.name} key={data.name}>{data.name}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </div>

              <Button type="submit"
                variant="outlined"
                color="primary"
              >Search</Button>
            </form>
          </div>
        </div>
      </div>
      <center><h1>Images</h1></center>
      <div className="img-grid">
        {images ? images.map(image => (
          <div className="img-wrap" key={image.id} /*onClick={() => setSelectedImg(doc.url)}*/>
            <img src={image.img_src} alt="pic" />
          </div>
        )) : "No images available for this camera"}
      </div>
    </div>
  )
}

export default MarsRover;
