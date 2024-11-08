import React, {useState, useEffect} from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/voiture.css";
import voitureData from "../assets/data/voitures";
import VoitureCard from "./../shared/VoitureCard";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

const Voitures = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <>
    
    <section>
      <Container>
        <Row>
        <Col lg="12">
          <SearchBar /></Col>
          <Col lg="12">
          <CommonSection  title={"Les prix les plus bas de l'univers... entrez et vérifiez !"} />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="pt-0">
      <Container>
        <Row>
        {voitureData?.map(voiture => (
            <Col lg="3" className="mb-4" key={voiture.id}>
             <VoitureCard voiture={voiture} />
            </Col>
          ))}
          <Col lg="12">
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number => (
                <span
                  key={number}
                  onClick={() => setPage(number)}
                  className={page === number ? "active__page" : ""}
                  >
                  {number + 1}
                </span>
              ))}
            </div>
          </Col>
          <Newsletter />
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Voitures;