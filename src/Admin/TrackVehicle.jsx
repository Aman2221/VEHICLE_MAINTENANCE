import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import { db } from '../firebase'
import './styles/Tracker.css'
const TrackVehicle = () => {

    const [location,setLocation] = useState([]);
    useEffect(() => {
         db.collection('user_location').get()
        .then((snapshot) => {
            setLocation(snapshot.docs.map(doc => doc.data()))
        })
        .catch((e) => {
            console.log(e);
        })
    }, [location]);
    return (
        <div className='track'>
             <div className="data">
            <ul>
            <li>
            <h5><i className='bx bxs-calendar-check'></i>Accuracy</h5>
                {
                location.map((item) => (
                        <p>
                        {item.accuracy}
                        </p>  
                ))}
            </li>
            <li id='email_admin'>
                <h5><i className='bx bx-time'></i>Latitude</h5>
                {
                location.map((item) => (
                    <p>
                    {item.latitude}
                    </p>  
                ))}
                
            </li>
            <li >
                <h5><i className="far fa-envelope"></i>Longitude</h5>
                {
                    location.map((item) => (
                    <p>
                    {item.longitude}
                    </p>  
                ))}
            </li>
            </ul>
            </div>  
        </div>
    )
}

export default TrackVehicle
