import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';

const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center ">
            <Subtitle subtitle={'Compare Befor You Go'} />
            <img src={worldImg} alt="" />
          </div>
          <h1>
          Location de voiture, longue et courte durée{" "}
            <span className="highlight">🚙</span>
          </h1>
          <p>
          Explorez en style avec notre service de location de voiture à large gamme de choix ! 🌟
          Réservez dès maintenant pour garantir la disponibilité du véhicule de votre choix !
          </p>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}

export default Home