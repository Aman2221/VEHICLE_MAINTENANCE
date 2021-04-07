import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { db } from '../firebase'

const FuelDetails = () => {
    
    const [bill, setBill] = useState();
    const [ltr, setLiter] = useState();
    const [amount, setAmount] = useState();
    const [vehivle_no, setVehivle_no] = useState();
    const [driver_name, setDriver_name] = useState();
    const date = new Date().toLocaleDateString();
    const handleService = (e) => {
        e.preventDefault();
        db.collection('fuel_details').add({
            amount : amount,
            bill_no : bill,
            liter : ltr,
            vehicle_no : vehivle_no,
            driver_name : driver_name,
            date : date
        }).then(() => {
            alert('Data added successfully')
        }).catch((e) => {
            console.log(e.massage);
        })
    }
    return (
        <div className='Service_Page'>
        <h3>Add Fuel Details</h3>
           <div id='Service_Page' className="row">
            <form className="col s10">
            <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="dname" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setDriver_name(e.target.value)}
                        />
                    <label htmlFor="dname">Driver Name</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="fvehicleNo" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setVehivle_no(e.target.value)}
                        />
                    <label htmlFor="fvehicleNo">Vehicle Number</label>
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
                    <label htmlFor="bill">Bill No </label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="liter" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setLiter(e.target.value)}
                        />
                    <label htmlFor="liter">Liter</label>
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

export default FuelDetails
