import React from 'react';
import VoitureCard from '../../shared/VoitureCard';
import voitureData from '../../assets/data/voitures';
import { Col } from "reactstrap";
const FeaturedVoitureList = () => {
  return (
    <>
    {voitureData?.map(voiture => (
        <Col lg="3" className="mb-4" key={voiture.id}>
            <VoitureCard voiture={voiture} />
        </Col>
    ))}
    </>
  );
};

export default FeaturedVoitureList