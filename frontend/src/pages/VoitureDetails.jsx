import React, {useRef, useState} from 'react';
import "../styles/voiture-details.css";
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import voitureData from "../assets/data/voitures"
import calculateAvgRating from '../utils/avgRating';
import avatar from "../assets/images/avatar.jpg";

const VoitureDetails = () => {
  const {id} = useParams()
  const reviewMsgRef = useParams();
  const [voitureRating, setVoitureRating] = useState(null)

  const voiture = voitureData.find(voiture=> voiture.id === id)

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} =
  voiture;

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  const options = { day: "numeric", month: "long", year: "numeric"};

  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;

    // alert(`${reviewText} ${voitureRating}`);
  }

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
                  <span><i class="ri-map-pin-2-line"></i> {city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i> ${price} /per person</span>
                  <span><i class="ri-map-pin-time-line"></i> {distance}k/m</span>
                  <span><i class="ri-group-line"></i>{maxGroupSize} people</span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="voiture__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span onClick={()=> setVoitureRating(1)}>1<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setVoitureRating(2)}>2<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setVoitureRating(3)}>3<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setVoitureRating(4)}>4<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setVoitureRating(5)}>5<i class="ri-star-s-fill"></i></span>
                  </div>
                  <div className="review__input">
                    <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required />
                    <button className="btn primary__btn text-white" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className="user__reviews">
                  {
                    reviews?.map(review=>(
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>wolf</h5>
                              <p>
                                {new Date("08-11-2024").toLocaleDateString(
                                  "en-US", options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5<i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing voiture</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
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