import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { API } from "../../config/api";
import { Container } from "react-bootstrap";
import "./Profile.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import TripCard from "../../component/Trip_Card/TripCard";
import Image from "../../img/avatar.png";
import Envelope from "../../img/envelope.png";
import Call from "../../img/phone.png";
import Map from "../../img/map.png";
import Button from "@restart/ui/esm/Button";
import toast, { Toaster } from "react-hot-toast";

export const Profile = () => {
  const { state } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [preview, setPreview] = useState("");
  const [form, setForm] = useState({
    image: "",
  });

  const getHistoryTransactions = async () => {
    try {
      const response = await API.get("/history-transactions");
      setHistory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setForm({
      image: e.target.files,
    });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };

    const formData = new FormData();

    formData.set("image", form.image[0], form.image[0].name);

    toast.promise(
      API.patch("/users", formData, config).then(() => {
        window.location.reload();
      }),
      {
        loading: "Loading",
        success: "Edit Profile Success",
        error: "Edit Profile Failed",
      }
    );
  };

  useEffect(() => {
    getHistoryTransactions();
  }, []);

  return (
    <div>
      <Container fluid className="profile-container ">
        <Navbar />
        <Container className="d-flex px-5 py-4  data-container rounded justify-content-between">
          <div className="profile-content px-4">
            <h1 className="mb-4">Personal Info</h1>
            <div className="d-flex align-items-center gap-3 mb-4 ">
              <img alt="" className="img-1" src={Image}></img>
              <div>
                <p className="fw-bold">{state.user.user?.name}</p>
                <small>Full Name</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4 ">
              <img alt="" src={Envelope}></img>
              <div>
                <p className="fw-bold">{state.user.user?.email}</p>
                <small>Email</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4 ">
              <img alt="" src={Call}></img>
              <div>
                <p className="fw-bold">{state.user.user?.phone}</p>
                <small>Mobile Phone</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4 ">
              <img alt="" src={Map}></img>
              <div>
                <p className="fw-bold">{state.user.user?.address}</p>
                <small>Adress</small>
              </div>
            </div>
          </div>
          <div className="d-flex profile-img flex-column gap-2 position-relative mb-4">
            <input
              onChange={onChangeHandler}
              name="image"
              type="file"
              id="actual-btn"
              hidden
            />
            <label for="actual-btn">
              <img
                alt=""
                className="position-absolute camera"
                src="/assets/camera.png"
              ></img>
            </label>

            {preview ? (
              <img alt="" className="profile" src={preview}></img>
            ) : (
              <img
                alt=""
                className="profile"
                src={state.user.user?.image}
              ></img>
            )}

            <Button
              className="btn btn-warning text-light fw-bold"
              onClick={onSubmitHandler}
              id="actual-btn"
            >
              Change Profile Picture
            </Button>
          </div>
        </Container>
        <h1 className="history-trip">History Trip</h1>
        {history?.map((el, i) => {
          return (
            <TripCard
              destination={el.trips?.title}
              transport={el.trips?.transportation}
              day={el.trips?.day}
              attachment={el.attachment}
              night={el.trips?.night}
              price={el?.total}
              date={el.trips?.dateTrip}
              status={el?.status}
              name={el.users?.fullName}
              gender={el.users?.gender}
              phone={el.users?.phone}
              country={el.trips?.country.name}
              qty={el?.counterQty}
              accomodation={el.trips?.accomodation}
              total={history[i].total}
            />
          );
        })}
        <Toaster />
        <Footer />
      </Container>
    </div>
  );
};

export default Profile;
