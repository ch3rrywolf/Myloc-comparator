import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import './voiture-card.css';
import calculateAvgRating from "../utils/avgRating";

const VoitureCard = ({ voiture }) => {
    const { id,title, photo, city, price, featured, reviews } = voiture;

    const { totalRating, avgRating } = calculateAvgRating(reviews);
    
  return (
    <div className="voiture__card">
        <Card>
            <div className="voiture__img">
                <img src={photo} alt="voiture-img" />
                {featured && <span>Featured</span>}
            </div>

            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="voiture__location d-flex align-items-center gap-1">
                    <i class="ri-map-pin-line"></i> {city}
                </span>
                <span className="voiture__location d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                        "Not rated"
                    ) : (
                        <span>({reviews.length})</span>
                    )}
                </span>
            </div>
            <h5 className="voiture__title"><Link to={`/voitures/${id}`}>{title}</Link></h5>
            <div className="card__bootom d-flex align-items-center justify-content-between mt-3">
                <h5>{price}dt<span> Prix pour 1 jour</span></h5>
                <button className="btn booking__btn">
                    <Link to={`/voitures/${id}`}>Réservez</Link>
                </button>
            </div>
            </CardBody>
        </Card>
        
    </div>
  )
}

export default VoitureCard