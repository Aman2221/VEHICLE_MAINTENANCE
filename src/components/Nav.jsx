import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'
import logo from '../img/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

const Nav = () => {
    const [sideBar,setSidebar] = useState(false);

    const [showIcon,setShowIcon] = useState(false);

    const [HideIcon,setHideIcon] = useState(false);

    const showSidebar = () =>{
            setSidebar(!sideBar); 
        }
    const VisibleIcon = () => {
        setShowIcon(!showIcon);
    }
    const hide = () => {
        setSidebar(true);
    }
    return (
        <div className="login">
            <nav>
                <div className="nav-wrapper">
                <Link to='/home' id='logoText' className="brand-logo left">
                <img className='headerLogo' src={logo} alt="logo"/>
                <span id='logoText'>Vehicle Maintenance</span>
                </Link>
                <div id="MenuIcon" className={HideIcon ? 'MenuIcon' : 'MenuIcon active'} onClick={VisibleIcon}>
                    <MenuIcon id='menu_icon' onClick={showSidebar}/>
                </div>
                 <div id='menu' className={sideBar ? 'menu' : 'menu active'}>
                    <ul>
                    <div id="CrossIcon" className={showIcon ? 'CrossIcon' : 'CrossIcon active' }>
                        <CancelIcon id='cancle_icon'  onClick={hide}/>
                    </div>
                        <li><Link to='/home'><Button variant="outlined">Home</Button></Link></li>
                        <li><Link to='/service'><Button variant="outlined">Service</Button></Link></li>
                        <li><Link to='/fuel'><Button variant="outlined">Fuel</Button></Link></li>
                        <li><Link to='/driver_register'><Button variant="outlined">New Driver</Button></Link></li>
                        <li><Link to='/fuel_bills'><Button variant="outlined">Fuel Bills</Button></Link></li>
                        <li><Link to='/maintain_details'><Button variant="outlined">Maintenance</Button></Link></li>
                        <li><Link to='/View_drivers'><Button variant="outlined">Drivers</Button></Link></li>
                        <li><Link to='/user_location'><Button variant="outlined">Location</Button></Link></li>
                    </ul>
                </div>
                <ul id="nav-mobile" className="right">
                    <li><Link to='/home'><Button variant="outlined">Home</Button></Link></li>
                    <li><Link to='/service'><Button variant="outlined">Service</Button></Link></li>
                    <li><Link to='/fuel'><Button variant="outlined">Fuel</Button></Link></li>
                    <li><Link to='/driver_register'><Button variant="outlined">New Driver</Button></Link></li>
                    <li><Link to='/fuel_bills'><Button variant="outlined">Fuel Bills</Button></Link></li>
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
