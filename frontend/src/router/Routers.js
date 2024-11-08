import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import Voitures from '../pages/Voitures';
import VoitureDetails from '../pages/VoitureDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/voitures' element={<Voitures />} />
        <Route path='/voitures/:id' element={<VoitureDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/voitures/search' element={<SearchResultList />} />
        <Route />
    </Routes>
  )
}

export default Routers