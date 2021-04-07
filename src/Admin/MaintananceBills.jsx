import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import { db } from '../firebase'
import './styles/Maintanence.css'

const MaintananceBills = () => {

    const [Servicedata,setServiceData] = useState([]);
    useEffect(() => {
         db.collection('service_details').get()
        .then((snapshot) => {
            setServiceData(snapshot.docs.map(doc => doc.data()))
        })
        .catch((e) => {
            console.log(e);
        })
    }, [Servicedata]);
    return (
        <div className='maintanence'>
            <div className="data">
            <ul>
            <li>
            <h5><i className='bx bxs-calendar-check'></i>Driver Name</h5>
                {
                Servicedata.map((item) => (
                        <p>
                        {item.driver_name}
                        </p>  
                ))}
            </li>
            <li id='email_admin'>
                <h5><i className='bx bx-time'></i>Bill No</h5>
                {
                Servicedata.map((item) => (
                    <p>
                    {item.bill_no}
                    </p>  
                ))}
                
            </li>
            <li >
                <h5><i className="far fa-envelope"></i>Amount</h5>
                {
                    Servicedata.map((item) => (
                    <p>
                    {item.amount}
                    </p>  
                ))}
            </li>
            <li >
                <h5><i className="far fa-envelope"></i>Date</h5>
                {
                    Servicedata.map((item) => (
                    <p>
                    {item.date}
                    </p>  
                ))}
            </li>
            </ul>
            </div>  
        </div>
    )
}

export default MaintananceBills
