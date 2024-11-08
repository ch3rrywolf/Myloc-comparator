import React from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

const Booking = ({voiture, avgRating}) => {

    const {price, reviews} = voiture
  return <div>
    <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price} <span>/per person</span></h3>
        <span className="voiture__location d-flex align-items-center">
                    <i class="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
    </div>
    </div>
};

export default Booking