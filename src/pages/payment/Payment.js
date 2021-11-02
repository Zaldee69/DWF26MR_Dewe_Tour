import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./Payment.css";
import Footer from "../../component/Footer/Footer";
import TripCard from "../../component/Trip_Card/TripCard";
import Image from "../../img/ss.png";
import ModalComp from "../../component/Items/modal/BigModal";

function Payment() {
  const params = useParams();
  const dataTrip = JSON.parse(localStorage.getItem("data_trip"));
  return (
    <div>
      <div className="payment-container">
        <Navbar />
        {dataTrip.map((el, i) => {
          return dataTrip[i].id == params.id ? (
            <TripCard
              key={i}
              image={Image}
              destination={el.titleTrip}
              country={el.country}
              day={el.day}
              night={el.night}
              transport={el.transportation}
              price={el.price}
              title="upload payment proof"
            />
          ) : (
            <div></div>
          );
        })}

        <ModalComp />
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
