import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/cc1.jpg'
import heroImg02 from '../assets/images/cc2.jpg'
import heroVideo from '../assets/images/cc3.jpg'
// import worldImg from '../assets/images/world.png'
import GlobalHomeImg from '../assets/images/HomeGlobal.svg'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedVoitureList from '../components/Featured-voiture/FeaturedVoitureList';
import experienceImg from "../assets/images/experience.png";
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

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
        <div className="text-center">
        <h5 className="services__subtitle">What We serve</h5>
        <h3 className="services_title">Les prix les plus bas de l'univers... entrez et vérifiez !</h3>
        </div>
        <ServiceList />
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans love'} />
          <h2 className="testimonial__title">What our fans say about us</h2>
        </Col>
        <Col lg="12">
        <Testimonials />
        </Col>
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg="12" className="mb-5">
          <Subtitle subtitle={"Explore"} />
          <h2 className="featured__voiture-title">Our featured voitures</h2>
        </Col>
        <FeaturedVoitureList />
        <p className="text-center">Une note de <b>4.0</b> sur 5 sur la base de <u>82 211 avis.</u>Nos avis préférés.</p>
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div>
            <Subtitle />
            <h2>With our all experience <br /> we will serve you</h2>
            <p>experience test test test.
              <br />
              experience test2 test2 test2.
            </p>
          </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful</h6>
            </div>
            <div className="counter__box">
              <span>4k+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter__box">
              <span>2</span>
              <h6>Years experiences</h6>
            </div>
          </div>
        </Col>
        <Col lg="6">
        <div className="experience__img">
          <img src={experienceImg} alt="" /></div></Col>
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className="gallery__title"> our Customers voiture gallery</h2>
        </Col>
        <Col lg='12'>
          <MasonryImagesGallery />
        </Col>
      </Row>
    </Container>
  </section>

  
  <Newsletter />
  </>
}

export default Home