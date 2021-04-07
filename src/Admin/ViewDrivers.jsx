import React,{ useState, useEffect } from 'react'
import './styles/FuelBills.css'
import { db } from '../firebase'
import './styles/ViewDrivers.css'
const ViewDrivers = () => {
    
    const [data,setData] = useState([]);
    const [getAmount, setGetAmmount] = useState([]);
    
    useEffect(() => {
        db.collection('user_data').get()
        .then((snapshot) => {
            setData(snapshot.docs.map(doc => doc.data()))
        })
        .catch((e) => {
            console.log(e);
        })
        //Amount
         db.collection('fuel_details').get()
        .then((snapshot) => {
            setGetAmmount(snapshot.docs.map(doc => doc.data()))
        })
        .catch((e) => {
            console.log(e);
        })
    }, [data]);

    return (
        <div className='viewDrivers'>
            <div className="data">
            <ul>
            <li>
            <h5 className='table_head'><i className='bx bxs-calendar-check'></i>Name</h5>
                {
                data.map((item) => (
                        <p className='table_data'>
                        {item.name}
                        </p>  
                ))}
            </li>
            <li>
                <h5 className='table_head'><i className='bx bx-time'></i>Vehicle</h5>
                {
                data.map((item) => (
                    <p className='table_data'>
                    {item.vehicle_no}
                    </p>  
                ))}
                
            </li>
            
            <li >
                <h5 className='table_head'><i className="far fa-envelope"></i>Email</h5>
                {data.map((item) => (
                    <p className='table_data'>
                    {item.email}
                    </p>  
                ))}
            </li>
            <li >
                <h5 className='table_head'><i className="far fa-envelope"></i>Contacts</h5>
                {data.map((item) => (
                    <p className='table_data'>
                    {item.contact}
                    </p>  
                ))}
            </li>
            <li className='d-none' id='d_none'>
                <h5 className='table_head'><i className="far fa-envelope"></i>Age</h5>
                {data.map((item) => (
                    <p className='table_data'>
                    {item.age}
                    </p>  
                ))}
            </li>
            </ul>
            </div> 
        </div>
    )
}

export default ViewDrivers
