import React,{ useState } from 'react'
import '../styles/Service.css'
import { Button } from '@material-ui/core';
import { db } from '../firebase'

const ServiceDetails = () => {

    const [bill, setBill] = useState();
    const [status, setStatus] = useState();
    const [amount, setAmount] = useState();
    const [sdrive_name, setSdrive_name] = useState();
    const date = new Date().toLocaleDateString();
    const handleService = (e) => {
        e.preventDefault();
        db.collection('service_details').add({
            amount : amount,
            bill_no : bill,
            status : status,
            driver_name : sdrive_name,
            date : date
        }).then(() => {
            alert('Data added successfully')
        }).catch((e) => {
            console.log(e.massage);
        })
    }
    return (
        <div className='Service_Page'>
        <h3>Add Service Details</h3>
           <div id='Service_Page' className="row">
            <form className="col s10">
             <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="sdrivername" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setSdrive_name(e.target.value)}
                        />
                    <label htmlFor="sdrivername">Driver Name</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="bill" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setBill(e.target.value)}
                        />
                    <label htmlFor="bill">Bill No :</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="status" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setStatus(e.target.value)}
                        />
                    <label htmlFor="status">Status</label>
                    </div>
                </div> 
                <div className="row">
                    <div className="input-field col s5">
                    <input 
                        id="amount" 
                        type="text" 
                        className="validate"
                        onChange= {(e) => setAmount(e.target.value)}
                        />
                    <label htmlFor="amount">Amount</label>
                    </div>
                </div>
                <Button type='submit' onClick={handleService} variant="contained" color="secondary">Submit</Button>
            </form>
            </div>      
        </div>
    )
}

export default ServiceDetails
