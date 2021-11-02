import React from "react";
import { Container } from "react-bootstrap";
import "./Profile.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import TripCard from "../../component/Trip_Card/TripCard";
import Image from "../../img/avatar.png";
import Envelope from "../../img/envelope.png";
import Call from "../../img/phone.png";
import Map from "../../img/map.png";
import ProfileImg from "../../img/Rectangle 12.png";
import QRimage from "../../img/qr.png";
import Button from "@restart/ui/esm/Button";

export const Profile = () => {
  const userProfile = localStorage.getItem("user");
  const newUserProfile = JSON.parse(userProfile);

  console.log(newUserProfile[0].email);

  return (
    <div>
      <Container fluid className="profile-container ">
        <Navbar />
        <Container className="d-flex px-5 py-4  data-container rounded justify-content-between">
          <div className="profile-content px-4">
            <h1 className="mb-4">Personal Info</h1>
            <div className="d-flex align-items-center gap-3 mb-4 ">
              <img className="img-1" src={Image}></img>
              <div>
                <p className="fw-bold">{newUserProfile[1].fullname}</p>
                <small>Full Name</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4 ">
              <img src={Envelope}></img>
              <div>
                <p className="fw-bold">{newUserProfile[1].email}</p>
                <small>Email</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4 ">
              <img src={Call}></img>
              <div>
                <p className="fw-bold">{newUserProfile[1].phone}</p>
                <small>Mobile Phone</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4 ">
              <img src={Map}></img>
              <div>
                <p className="fw-bold">
                  Perumahan Permata Bintaro Residence C-3
                </p>
                <small>Adress</small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-3 mb-4">
            <img src={ProfileImg}></img>
            <Button className="btn text-light fw-bold btn-warning">
              Change Foto Profile
            </Button>
          </div>
        </Container>
        <h1 className="history-trip">History Trip</h1>
        <TripCard
          night="4"
          day="2"
          transport="Qatar Airways"
          destination="Fun Tassie Vacation"
          country="1"
          className="trip-card"
          image={QRimage}
          title="TCK1101"
        />
        <Footer />
      </Container>
    </div>
  );
};

export default Profile;
