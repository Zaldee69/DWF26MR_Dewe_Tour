import React, { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "../../img/Icon.png";
import "./Trip_card.css";
import { AuthContext } from "../../context/AuthContextProvider";
import RupiahFormat from "../../utils/RupiahFormat";

function TripCard(props) {
  const { state } = useContext(AuthContext);
  const [form, setForm] = useState({
    image: "",
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    setForm({
      image: e.target.files,
    });
  };

  return (
    <div>
      <Container className="payment-content-container pt-3 ps-5 mt-5 rounded">
        <div className="payment-image d-flex flex-column gap-2">
          <img alt="" src={props.attachment}></img>
          {state.user.user?.role === "user" ? (
            <>
              {props.status === "Waiting Payment" && (
                <>
                  <input
                    onChange={onChangeHandler}
                    name="image"
                    type="file"
                    id="actual-btn"
                    hidden
                  />
                  <label className="text-center fw-bold" for="actual-btn">
                    Upload Image
                  </label>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>

        <Row className="justify-content-between">
          <Col xs={9}>
            <img alt={Image} src={Image}></img>
          </Col>
          <Col xs={3}>
            <div className="ps-5">
              <h1 className="fw-bold">Booking</h1>
              <p>
                <span className="fw-bold">Saturday</span>, 22 July 2020
              </p>
            </div>
          </Col>
        </Row>

        <Container>
          <Row md={3} className="pb-5">
            <Col xs={6} md={4}>
              <h1 className="fs-3 pt-2">{props.destination}</h1>
              <small>{props.country}</small>
            </Col>
            <Col xs={3} md={2}>
              <h3 className="fw-bold">Date Trip</h3>
              <small>{props.date}</small>
            </Col>
            <Col xs={3} md={2}>
              <h3 className="fw-bold">Duration</h3>
              <small>{`${props.day} Day ${props.night} Night`}</small>
            </Col>
          </Row>
          <Row md={3}>
            <Col xs={6} md={4}>
              <p
                className={` ${
                  props.status == "Pending"
                    ? "bg-warning"
                    : props.status == "Approve"
                    ? "bg-success"
                    : "bg-danger"
                }  mt-3 px-3 py-1 d-inline-flex text-light fs-7`}
              >
                {props.status}
              </p>
            </Col>
            <Col xs={3} md={2}>
              <h3 className="fw-bold">Accomodation</h3>
              <small>{props.accomodation}</small>
            </Col>
            <Col xs={3} md={2}>
              <h3 className="fw-bold">Transportation</h3>
              <small>{props.transport}</small>
            </Col>
          </Row>
        </Container>
        <Row className="border-bottom border-2 inf pb-2 pt-5" md={12}>
          <Col xs={2} md={2}>
            <span className="fw-bold fs-5">No</span>
          </Col>
          <Col xs={2} md={2}>
            <span className="fw-bold fs-5">Name</span>
          </Col>
          <Col xs={2} md={2}>
            <span className="fw-bold fs-5">Gender</span>
          </Col>
          <Col xs={2} md={2}>
            <span className="fw-bold fs-5">Phone</span>
          </Col>
        </Row>
        <Row
          className="border-bottom border-2 inf py-2 align-items-center"
          md={12}
        >
          <Col xs={2} md={2}>
            <small className="fs-6">1</small>
          </Col>
          <Col xs={2} md={2}>
            <small className="fs-6">{props.name}</small>
          </Col>
          <Col xs={2} md={2}>
            <small className="fs-6">{props.gender}</small>
          </Col>
          <Col xs={2} md={2}>
            <small className="fs-6">{props.phone}</small>
          </Col>
          <Col xs={1} md={1}>
            <p className="fs-5 fw-normal mt-2">Qty</p>
          </Col>
          <Col xs={3} md={3}>
            <p className="fs-5 mt-2 fw-normal">
              : <span className="ps-3 mt-3 fs-4">{props.qty}</span>
            </p>
          </Col>
        </Row>
        <Row className=" inf py-2 align-items-center" md={12}>
          <Col xs={2} md={2}></Col>
          <Col xs={2} md={2}></Col>
          <Col xs={2} md={2}></Col>
          <Col xs={2} md={2}></Col>
          <Col xs={1} md={1}>
            <p className="fs-5 fw-normal mt-2">Total</p>
          </Col>
          <Col xs={3} md={3}>
            <p className="fs-5 mt-2 fw-normal">
              :{" "}
              <span className="ps-3 mt-3 fw-bold text-danger fs-4">
                IDR {RupiahFormat(props.total)}
              </span>
            </p>
          </Col>
        </Row>
      </Container>
      {state.user.user?.role === "admin" ||
      props.status === "Approve" ||
      props.status === "Cancel" ? (
        <></>
      ) : (
        <Button
          onClick={() => props.payment({ id: props.id, form })}
          className="btn btn-warning text-light fw-bold px-5 mt-3 py-1 btn-payment"
        >
          Pay
        </Button>
      )}
    </div>
  );
}

export default TripCard;
