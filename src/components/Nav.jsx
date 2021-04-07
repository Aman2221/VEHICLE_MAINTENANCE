import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'
import logo from '../img/logo.png'

const Nav = () => {
    return (
        <div className="login">
            <nav>
                <div className="nav-wrapper">
                <Link to='/home' id='logoText' className="brand-logo left">
                <img className='headerLogo' src={logo} alt="logo"/>
                Vehicle Maintenance</Link>
                <ul id="nav-mobile" className=" right hide-on-med-and-down">
                    <li><Link to='/home'><Button variant="outlined">Home</Button></Link></li>
                    <li><Link to='/service'><Button variant="outlined">Service</Button></Link></li>
                    <li><Link to='/fuel'><Button variant="outlined">Fuel</Button></Link></li>
                     <li><Link to='/driver_register'><Button variant="outlined">New Driver</Button></Link></li>
                    <li><Link to='/fuel_biils'><Button variant="outlined">Fuel Bills</Button></Link></li>
                    <li><Link to='/maintain_details'><Button variant="outlined">Maintenance</Button></Link></li>
                    <li><Link to='/View_drivers'><Button variant="outlined">Drivers</Button></Link></li>
                    <li><Link to='/user_location'><Button variant="outlined">Location</Button></Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
