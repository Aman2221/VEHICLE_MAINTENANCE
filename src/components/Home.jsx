import React, { useState, useEffect} from 'react'
import '../styles/Home.css'
import { useStateValue } from '../StateProvider';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import { Link } from 'react-router-dom';
import { db } from '../firebase'

const Home = () => {
    const [{DATA}] = useStateValue();

    const successCallback = (possition) => {
        db.collection('user_location').add({
            accuracy : possition.coords.accuracy,
            latitude : possition.coords.latitude,
            longitude : possition.coords.longitude
        })
    };
    const errorCallback = (error) => {
        console.log('Please Allow Location');
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    setTimeout(function(){  alert('Loction sent to admin'); }, 15000);
    return (
        <div className='home'>
            <h5><b>Email :</b> {DATA.email}</h5><br/>
            <h5><b>Vehicle No :</b>{DATA.vehicleNo} </h5>
            <div className="service_fule">
            <Link to='/service'>
                <div className="service">
                    <SettingsIcon style={{ fontSize: 50 }} />
                    <p>Service</p>
                </div>
            </Link>
            <Link to='/fuel'>
                <div className="fuel">
                    <LocalGasStationIcon style={{ fontSize: 50 }}/>
                    <p>Fuel</p>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Home
