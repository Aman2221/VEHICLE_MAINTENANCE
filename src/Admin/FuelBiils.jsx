import React,{ useState, useEffect } from 'react'
import './styles/FuelBills.css'
import { db } from '../firebase'

const FuelBiils = () => {

    const [fueldata,setFuelData] = useState([]);
    useEffect(() => {
         db.collection('fuel_details').get()
        .then((snapshot) => {
            setFuelData(snapshot.docs.map(doc => doc.data()))
        })
        .catch((e) => {
            console.log(e);
        })
    }, [fueldata]);
    return (
        <div className='feul_bills'>
           <div className="data">
            <ul>
            <li>
            <h5><i className='bx bxs-calendar-check'></i>Driver Name</h5>
                {
                fueldata.map((item) => (
                        <p>
                        {item.driver_name}
                        </p>  
                ))}
            </li>
            <li id='email_admin'>
                <h5><i className='bx bx-time'></i>Vehicle No</h5>
                {
                fueldata.map((item) => (
                    <p>
                    {item.vehicle_no}
                    </p>  
                ))}
                
            </li>
            
            <li >
                <h5><i className="far fa-envelope"></i>Bill Number</h5>
                {
                    fueldata.map((item) => (
                    <p>
                    {item.bill_no}
                    </p>  
                ))}
            </li>
            <li >
                <h5><i className="far fa-envelope"></i>Amount</h5>
                {
                    fueldata.map((item) => (
                    <p>
                    {item.amount}
                    </p>  
                ))}
            </li>
            <li >
                <h5><i className="far fa-envelope"></i>Date</h5>
                {
                    fueldata.map((item) => (
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

export default FuelBiils
