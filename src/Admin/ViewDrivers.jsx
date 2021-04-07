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
            <h5><i className='bx bxs-calendar-check'></i>Driver Name</h5>
                {
                data.map((item) => (
                        <p>
                        {item.name}
                        </p>  
                ))}
            </li>
            <li id='email_admin'>
                <h5><i className='bx bx-time'></i>Vehicle No</h5>
                {
                data.map((item) => (
                    <p>
                    {item.vehicle_no}
                    </p>  
                ))}
                
            </li>
            
            <li >
                <h5><i className="far fa-envelope"></i>Email</h5>
                {data.map((item) => (
                    <p>
                    {item.email}
                    </p>  
                ))}
            </li>
            <li >
                <h5><i className="far fa-envelope"></i>Contacts</h5>
                {data.map((item) => (
                    <p>
                    {item.contact}
                    </p>  
                ))}
            </li>
            <li >
                <h5><i className="far fa-envelope"></i>Age</h5>
                {data.map((item) => (
                    <p>
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
