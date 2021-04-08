import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { auth, db } from '../firebase';
import '../styles/Register.css'
const Register = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [contact, setContact] = useState();
    const [age, setAge] = useState();
    const [vehicleNo, setVehicleNo] = useState();
    const handleRegister = (e) => {
        e.preventDefault();
        db.collection('user_data').add({
            age : age,
            contact : contact,
            email : email,
            name : name,
            vehicle_no : vehicleNo
        });
        auth.createUserWithEmailAndPassword(email, password).then(() => {
            alert('User Registered Successfully..');
            alert('please login with register email and password')
        })
        .catch((e) => {
            alert(e.message)
        })
    }

    return (
        <div className='register'>
            <h3>Register</h3>
            <div id='register_container' className="row">
            <form className="col s10">
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="Name" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setName(e.target.value)}
                        />
                    <label htmlFor="Name">Name</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="Contact" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setContact(e.target.value)}
                        />
                    <label htmlFor="Contact">Contact</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="Remail" 
                        type="email" 
                        className="validate"
                        onChange= {(e) => setEmail(e.target.value)}
                     />
                    <label htmlFor="Remail">Email</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="Age" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setAge(e.target.value)}
                        />
                    <label htmlFor="Age">Age</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input 
                        id="Vehivle" 
                        type="text" 
                        className="validate" 
                        onChange= {(e) => setVehicleNo(e.target.value)}
                        />
                    <label htmlFor="Vehivle">Vehivle No.</label>
                    </div>
                </div> 
                <div className="row">
                    <div className="input-field col s5">
                    <input 
                        id="Rpassword" 
                        type="password" 
                        className="validate"
                        onChange= {(e) => setPassword(e.target.value)}
                        />
                    <label htmlFor="Rpassword">Password</label>
                    </div>
                </div>
                <Button type='submit' onClick={handleRegister} variant="contained" color="secondary">Register</Button>
            </form>
            </div>    
        </div>
    )
}

export default Register
