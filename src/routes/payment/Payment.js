import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../component/Navbar/Navbar";
import "./Payment.css";
import Footer from "../../component/Footer/Footer";
import TripCard from "../../component/Trip_Card/TripCard";

function Payment() {
  return (
    <div>
      <Container fluid className="payment-container mt-5 ">
        <Navbar />
        <TripCard />
        <Footer />
        <button className="btn-payment fw-bold btn btn-warning py-2 px-5 text-light">
          Pay
        </button>
      </Container>
    </div>
  );
}

export default Payment;
