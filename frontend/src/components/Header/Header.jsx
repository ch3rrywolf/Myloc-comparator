import React from 'react';
import { Container, Row, Button} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo_myloc_hori.png'

const nav__links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'#',
        display:'About'
    },
    {
        path:'/voitures',
        display:'Voitures'
    },
]


const Header = () => {
  return <header className="header">
    <Container>
        <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </Row>
    </Container>
  </header> 
};

export default Header