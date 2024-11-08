import React from 'react';
import "../styles/voiture-details.css";
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import voitureData from "../assets/data/voitures"
import calculateAvgRating from '../utils/avgRating';

const VoitureDetails = () => {
  const {id} = useParams()

  const voiture = voitureData.find(voiture=> voiture.id === id)

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} =
  voiture;

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
            <div className="voiture__content">
              <img src={photo} alt="" />

              <div className="voiture__info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                <span className="voiture__location d-flex align-items-center gap-1">
                    <i class="ri-star-fill" style={{color: "var(--secondary-color)"}}
                    ></i>
                    {calculateAvgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                        "Not rated"
                    ) : (
                        <span>({reviews?.length})</span>
                    )}
                </span>
                <span>
                  <i class="ri-map-pin-user-fill"></i> {address}
                </span>
                </div>
                <div className="voiture__extra-details">
                  <span><i class="ri-map-pin-2-line"></i>{city}</span>
                  <span><i class="ri-map-money-dollar-circle-line"></i>${price}</span>
                  <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
              
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
};

export default VoitureDetails