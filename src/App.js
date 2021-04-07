import React, { useState } from 'react'
import Login from './components/Login'
import Nav from './components/Nav'
import './styles/App.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import FuelDetails from './components/FuelDetails'
import ServiceDetails from './components/ServiceDetails'
import { useStateValue } from './StateProvider'
import DriverRegistrations from './Admin/DriverRegistrations'
import FuelBiils from './Admin/FuelBiils'
import ViewDrivers from './Admin/ViewDrivers'
import MaintananceBills from './Admin/MaintananceBills'
import TrackVehicle from './Admin/TrackVehicle'

const App = () => {
  const [{user}] = useStateValue();
  console.log(process.env)
  return (
    <div className='app'>
    { !user ? (
        <div className='login-signup'>
          <Login />
          <Register />
        </div>
      )  
      :(
        <div>
          <Nav />
          <Switch>
            <Route exact path='/Home'>
                <Home />
            </Route>
            <Route exact path='/service'>
                <ServiceDetails />
            </Route>
            <Route exact path='/fuel'>
                <FuelDetails />
            </Route>
            <Route exact path='/login'>
                <Login />
              </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/driver_register'>
              <DriverRegistrations />
            </Route>
            <Route exact path='/fuel_biils'>
              <FuelBiils />
            </Route>
            <Route exact path='/View_drivers'>
              <ViewDrivers />
            </Route>
            <Route exact path='/maintain_details'>
              <MaintananceBills />
            </Route>
             <Route exact path='/user_location'>
              <TrackVehicle />
            </Route>
          </Switch>
        </div>
      )
    }  
    </div>
  )
}

export default App
