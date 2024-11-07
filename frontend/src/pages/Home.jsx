import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/cc1.jpg'
import heroImg02 from '../assets/images/cc2.jpg'
import heroVideo from '../assets/images/cc3.jpg'
import worldImg from '../assets/images/world.png'
import GlobalHomeImg from '../assets/images/HomeGlobal.svg'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
      <SearchBar />
        <Col lg='6'>
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center ">
          <Subtitle subtitle={'Compare Befor You Go'} />
            <img src={GlobalHomeImg} alt="" />
          </div>
          <h1>
          Location de voiture, longue et courte durée{" "}
            <span className="highlight">🚗</span>
          </h1>
          <p>
          Explorez en style avec notre service de location de voiture à large gamme de choix ! 🌟
          Réservez dès maintenant pour garantir la disponibilité du véhicule de votre choix !
          </p>
        </div>
        </Col>
        <Col lg='2'>
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>
        <Col lg='2'>
        <div className="hero__img-box mt-4">
          <img src={heroVideo} alt="" controls />
        </div>
        </Col>
        <Col lg='2'>
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
        </Col>
        
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg="3">
        <h5 className="services__subtitle">What We serve</h5>
        <h2 className="services_title">We offer our best services</h2>
        </Col>
      </Row>
    </Container>
  </section>

  </>
}

export default Home