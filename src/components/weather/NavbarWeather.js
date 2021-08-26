import React from 'react'
import Weather from '.'
import {WeatherH1,WeatherContainer,FormInput} from './WeatherElements'
export default function Navbar(props) {

    return (
        <WeatherContainer>
            
            
       <WeatherH1>
           
           <h1 className="title">Weather</h1>
           
       
       </WeatherH1>
            
            <div className="col-md-6">

            
                <form className="region" onSubmit={(e) => { props.changeLocation(e) }}>
                    <FormInput type="text" className="regioninput" placeholder="Select your region" onChange={(e) => { props.changeRegion(e.target.value) }} />
                </form>
            </div>
            </WeatherContainer>
        
        
    )
}