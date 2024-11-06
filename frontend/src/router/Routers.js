import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import Voitures from '../pages/Voitures';
import VoitureDetails from '../pages/VoitureDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/Home' element={<Home to='/home' />} />
        <Route path='/voitures' element={<Voitures to='/home' />} />
        <Route path='/voitures/:id' element={<VoitureDetails to='/home' />} />
        <Route path='/login' element={<Login to='/home' />} />
        <Route path='/register' element={<Register to='/home' />} />
        <Route path='/voitures/search' element={<SearchResultList to='/home' />} />
        <Route />
    </Routes>
  )
}

export default Routers