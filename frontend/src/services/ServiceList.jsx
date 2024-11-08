import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Location Voiture",
        desc: "Plus de 14.7 millions de clients satisfaits.",
    },
    {
        imgUrl: guideImg,
        title: "Pas de Frais de Modification",
        desc: "Modifications et annulations gratuites",
    },
    {
        imgUrl: customizationImg,
        title: "Évaluation 4.1 de 5",
        desc: "Basé sur +46000 avis indépendants",
    },
]

const ServiceList = () => {
  return (
   <>
   {servicesData.map((item, index) => (
    <Col lg="4" key={index}>
        <ServiceCard item={item} />
    </Col>
   ))}
   </>
  );
};

export default ServiceList;