import React, {useRef} from "react";
import "./search-bar.css";
import { Col, FormGroup, Form, FromGroup } from "reactstrap";


const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef('')
    const maxGroupSizeRef = useRef('')

    const serachHandler = ()=>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (location === "" || distance === "" || maxGroupSize === ""){
            return alert("All fields are required!");
        }
    };


  return (
    <Col lg="12">
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className={"d-flex gap-3 form__group form__group-fast"}>
                    <span>
                        <i class="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="where are you going?" ref={locationRef}></input>
                    </div>
                </FormGroup>
                <FormGroup className={"d-flex gap-3 form__group form__group-fast"}>
                    <span>
                        <i class="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m" ref={distanceRef}></input>
                    </div>
                </FormGroup>
                <FormGroup className={"d-flex gap-3 form__group form__group-last"}>
                    <span>
                        <i class="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>MAx People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef}></input>
                    </div>
                </FormGroup>
                <span className="search__icon" type="submit" onClick={serachHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar