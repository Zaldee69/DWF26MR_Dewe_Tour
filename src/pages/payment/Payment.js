import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../component/Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./Payment.css";
import Footer from "../../component/Footer/Footer";
import TripCard from "../../component/Trip_Card/TripCard";
import Image from "../../img/ss.png";
import Data from "../../data/Data.json";
import ModalComp from "../../items/modal/Modal";

function Payment() {
  const params = useParams();
  const detail = `${Data[params.id - 1]?.day}D/${Data[params.id - 1]?.night}N
  ${Data[params.id - 1]?.destination}`;
  return (
    <div>
      <Container fluid className="payment-container mt-5 ">
        <Navbar />
        <TripCard
          image={Image}
          detail={detail}
          day={Data[params.id - 1]?.day}
          night={Data[params.id - 1]?.night}
          title="upload payment proof"
        />
        <Footer />
        <ModalComp />
      </Container>
    </div>
  );
}

export default Payment;
