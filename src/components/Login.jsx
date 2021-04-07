import React,{ useState } from 'react'
import '../styles/Login.css'
import { Button, Link } from '@material-ui/core'
import { auth } from '../firebase.js'
import { useStateValue } from '../StateProvider'
const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [vehicleNo, setVehicleNo] = useState();
    const [{DATA}, dispatch] = useStateValue();
    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((result) => {
            alert('Login Successful ');
            dispatch({
                type : 'SET_DATA',
                user : result.user,
                DATA : {
                    email : result.user.email,
                    vehicleNo : vehicleNo
                }
            })
        })
        .catch((e) => {
            alert(e.message);
        })
            console.log(DATA);
    }
    return (
        <div className='login'>
        <h3 className='loginHeading'>Login</h3>
            <div id='login_container' className="row">
            <form className="col s10">
                <div className="row">
                    <div className=" input-field col s5">
                    <input id="email" 
                        type="email" 
                        className="validate" 
                        onChange = {(e) => setEmail(e.target.value)}
                        />
                    <label htmlFor="email">Email</label>
                    </div>
                </div> 
                <div className="row">
                    <div className=" input-field col s5">
                    <input id="vehicleNo" 
                        type="text" 
                        className="validate" 
                        onChange = {(e) => setVehicleNo(e.target.value)}
                        />
                    <label htmlFor="vehicleNo">Vehicle No</label>
                    </div>
                </div> 
                <div className="row">
                    <div className="input-field col s5">
                    <input id="password" 
                        type="password" 
                        className="validate" 
                        onChange = {(e) => setPassword(e.target.value)}
                        />
                    <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="login_registerBtns">
                    <Button type='submit' onClick={handleLogin} variant="contained" color="secondary">Login</Button>
                    
                </div>
                </form>
            </div>    
        </div>
    )
}

export default Login
