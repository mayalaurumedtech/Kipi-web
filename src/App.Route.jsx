import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/account/Login';
import CreateAccount from './components/account/CreateAccount';
import About from './components/about/About';
import Layout from './components/shared/Layout';
import Otp from './components/account/Otp';
import InstituteRegistrationLayout from './components/shared/InstituteRegistrationLayout';
import InstituteRegistration from './components/InstituteRegistration/InstituteRegistration.jsx';
import InstituteDashboardLayout from './components/shared/InstituteDashboardLayout.jsx';
import InstituteLayout from './components/shared/InstituteLayout.jsx';
import InstituteLandingDashboard from './components/InstituteDashboard/InstituteLandingDashboard.jsx';
import InstituteDashboard from './components/InstituteDashboard/dashBoard/InstituteDashboard.jsx';


const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" >
                    <Route path="login" element={<Login />} />
                    <Route path="create-account" element={<CreateAccount />} />
                    <Route path="otp" element={<Otp />} />
                    <Route  element={<Layout />}>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/About' element={<About />} />
                    </Route>

                    <Route  element={<InstituteRegistrationLayout />}> 
                        <Route exact path='/institute-registration' element={<InstituteRegistration />} />
                    </Route>

                    <Route  element={<InstituteDashboardLayout />}> 
                        <Route exact path='/institute-landing-dashboard' element={<InstituteLandingDashboard />} />
                    </Route>

                    <Route  element={<InstituteLayout />}> 
                        <Route exact path='/institute-dashboard' element={<InstituteDashboard />} />
                    </Route>
                </Route>
            </Routes>

        </>
    )
}

export default AppRoute