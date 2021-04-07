import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { auth, db } from '../firebase';
import './styles/Register.css'

const DriverRegistrations = () => {
    // D : Driver
    const [Dname, setDName] = useState();
    const [Demail, setDEmail] = useState();
    const [Dpassword, setDPassword] = useState();
    const [Dcontact, setDContact] = useState();
    const [Dage, setDAge] = useState();
    const [DvehicleNo, setDVehicleNo] = useState();
    const handleRegister = (e) => {
        e.preventDefault();
        db.collection('user_data').add({
            age : Dage,
            contact : Dcontact,
            email : Demail,
            name : Dname,
            vehicle_no : DvehicleNo
        });
        auth.createUserWithEmailAndPassword(Demail, Dpassword).then(() => {
            alert('Driver Registered Successfully..');
        })
        .catch((e) => {
            alert(e.message)
        })
    }


    return (
        <div className='driver_reg'>
             <h3>Driver Register</h3>
            <div id='register_container' className="row">
            <form className="col s10">
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="DName" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setDName(e.target.value)}
                        />
                    <label htmlFor="DName">Driver Name</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="DContact" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setDContact(e.target.value)}
                        />
                    <label htmlFor="DContact">Driver Contact</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="Demail" 
                        type="email" 
                        className="validate"
                        onChange= {(e) => setDEmail(e.target.value)}
                     />
                    <label htmlFor="Demail">Driver Email</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="Age" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setDAge(e.target.value)}
                        />
                    <label htmlFor="DAge">Driver Age</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="DVehivle" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setDVehicleNo(e.target.value)}
                        />
                    <label htmlFor="DVehivle">Driver Vehivle No.</label>
                    </div>
                </div> 
                <div className="row">
                    <div className="input-field col s5">
                    <input 
                        id="Dpassword" 
                        type="password" 
                        className="validate"
                        onChange= {(e) => setDPassword(e.target.value)}
                        />
                    <label htmlFor="Dpassword">Password</label>
                    </div>
                </div>
                <Button type='submit' onClick={handleRegister} variant="contained" color="secondary">Submit</Button>
            </form>
            </div>    
        </div>
    )
}

export default DriverRegistrations
