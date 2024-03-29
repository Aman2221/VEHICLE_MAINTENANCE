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
            <h5 className='table_head'><i className='bx bxs-calendar-check'></i>Driver Name</h5>
                {
                fueldata.map((item) => (
                        <p className='table_data'>
                        {item.driver_name}
                        </p>  
                ))}
            </li>
            <li >
                <h5 className='table_head'><i className='bx bx-time'></i>Vehicle</h5>
                {
                fueldata.map((item) => (
                    <p className='table_data'>
                    {item.vehicle_no}
                    </p>  
                ))}
                
            </li>
            
            <li >
                <h5 className='table_head'><i className="far fa-envelope"></i>Bill NO</h5>
                {
                    fueldata.map((item) => (
                    <p className='table_data'>
                    {item.bill_no}
                    </p>  
                ))}
            </li>
            <li >
                <h5 className='table_head'><i className="far fa-envelope"></i>Amount</h5>
                {
                    fueldata.map((item) => (
                    <p className='table_data'>
                    {item.amount}
                    </p>  
                ))}
            </li>
            <li >
                <h5 className='table_head'><i className="far fa-envelope"></i>Date</h5>
                {
                    fueldata.map((item) => (
                    <p className='table_data'>
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
