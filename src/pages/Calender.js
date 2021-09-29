import React,{useState} from 'react';
import MyCalender from '../components/Calender'
import Navbar from '../components/Calender/Navbarcalendar';




const Calender = () => {

    
   // 

  
    return (
        <div className="calender-cont">
        <Navbar/>
        <MyCalender/>
        </div>
    );
}

export default Calender;


