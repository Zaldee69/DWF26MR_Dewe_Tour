//package
import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

//Rupiah formatter
import RupiahFormat from "../../utils/RupiahFormat";

//component
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import { Container, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
//styling
import "./DetailTrip.css";

//Global State
import { AuthContext } from "../../context/AuthContextProvider";

//API config for axios
import { API } from "../../config/api";

function DetailTrip() {
  const [counter, setCounter] = useState(1);
  const [trip, setTrip] = useState([]);
  const { state } = useContext(AuthContext);
  const { id } = useParams();
  const history = useHistory();

  const successNotify = (str) => toast.success(str);
  const failedNotify = (str) => toast.error(str);

  // Fetching trip data from database
  const getTrip = async (id) => {
    try {
      const response = await API.get("/trip/" + id);
      // Store trip data to useState variabel
      setTrip(response.data);
    } catch (error) {}
  };

  //delete trip function
  const deleteTrip = async () => {
    try {
      await API.delete("/trip/" + id);

      history.push("/");
    } catch (error) {}
  };

  const handleTransaction = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = {
        counterQty: counter,
        total: counter * trip.price,
        trip: trip.id,
        user: state.user.user.id,
      };

      const quota = {
        quota_filled: trip.quota_filled + counter,
      };

      await API.post("/transaction", data, config);
      await API.patch("/trip/" + id, quota, config);

      setTimeout(() => {
        history.push("/payment");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  const addWishlist = (id) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    API.post("/wishlist", { trip: id }, config)
      .then((res) => {
        successNotify(res.data.message);
      })
      .catch((err) => {
        failedNotify(err.response.data.message);
      });
  };

  // UseEffect
  useEffect(() => {
    getTrip(id);
  }, []);

  return (
    <>
      <Navbar />

      <div className="detail-tour container-fluid">
        <Container>
          <img alt="" className="hibiscus-img" src="/assets/hibiscus.png"></img>
          <img alt="" className="palm-img" src="/assets/palm.png"></img>
          <div className="detail-tour-title">
            <h1 className="text-dark fw-bold fs-1">{trip?.title}</h1>
            <small className="fs-4">{trip.countries?.name}</small>
          </div>
          <div className="container-fluid img-container">
            <div className="container d-flex flex-column gap-3 justify-content-center">
              {trip.image && (
                <img alt="" className="image-1" src={`${trip?.image[0]}`}></img>
              )}

              <div className="d-flex gap-3">
                {trip.image && (
                  <>
                    <img
                      alt=""
                      className="image-2"
                      src={`${trip?.image[3]}`}
                    ></img>
                    <img
                      alt=""
                      className="image-3"
                      src={`${trip?.image[1]}`}
                    ></img>
                    <img
                      alt=""
                      className="image-4"
                      src={`${trip?.image[2]}`}
                    ></img>
                  </>
                )}
              </div>

              <h3 className="fs-5 fw-bold pt-5 pb-3">Information Trip</h3>
              <div className="d-flex gap-4">
                <div>
                  <small>Accomodation</small>
                  <div className="d-flex img gap-2">
                    <img alt="" src="/assets/hotel.png"></img>
                    <h1 className="fs-5 pt-2 ">{`Hotel ${trip?.night} Night`}</h1>
                  </div>
                </div>
                <div>
                  <small>Transportation</small>
                  <div className="d-flex img gap-2">
                    <img alt="" src="/assets/vector1.png"></img>
                    <h1 className="fs-5 pt-2 ">{trip?.transportation}</h1>
                  </div>
                </div>
                <div>
                  <small>Eat</small>
                  <div className="d-flex img gap-2">
                    <img alt="" src="/assets/meal.png"></img>
                    <h1 className="fs-5 pt-2 ">{trip?.eat}</h1>
                  </div>
                </div>
                <div>
                  <small>Duration</small>
                  <div className="d-flex img gap-2">
                    <img alt="" src="/assets/time.png"></img>
                    <h1 className="fs-5 pt-2 ">{`${trip?.day} Day ${trip?.night} Night`}</h1>
                  </div>
                </div>
                <div>
                  <small>Date Trip</small>
                  <div className="d-flex img gap-2">
                    <img alt="" src="/assets/Vector4.png"></img>
                    <h1 className="fs-5 pt-2 ">{trip?.dateTrip}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container description-container">
            <h3 className="fw-bold">Description</h3>
            <p>{trip?.description}</p>
          </div>
          <div className="container book-container ">
            <div className="d-flex justify-content-between border-bottom border-3 pb-2">
              <h2 className="fs-2 text-warning">
                IDR. {RupiahFormat(trip?.price)}{" "}
                <span className="text-dark">/ Person</span>
              </h2>
              {state.user.user?.role == "admin" ? (
                <></>
              ) : (
                <div className="d-flex gap-3 align-items-center">
                  <img
                    alt=""
                    className="counter-img"
                    onClick={() => counter > 0 && setCounter(counter - 1)}
                    src="/assets/Minus.png"
                  ></img>
                  <p className="m-auto fw-bold fs-4 pt-2">{counter}</p>
                  <img
                    alt=""
                    className="counter-img"
                    onClick={() =>
                      setCounter(
                        counter < trip.quota - trip.quota_filled
                          ? counter + 1
                          : counter
                      )
                    }
                    src="/assets/Plus.png"
                  ></img>
                </div>
              )}
            </div>
            {state.user.user?.role == "admin" ||
            trip?.quota_filled === trip?.quota ? (
              <></>
            ) : (
              <div className=" d-flex justify-content-between pt-3 border-bottom border-3 pb-2">
                <h2>Total :</h2>
                <h2 className="text-warning">
                  IDR. {RupiahFormat(trip?.price * counter)}
                </h2>
              </div>
            )}
            <div className="d-flex ">
              {state.user.user?.role == "admin" ? (
                <>
                  <button
                    onClick={deleteTrip}
                    className="btn btn-danger text-light  px-5 py-2  fw-bold mt-4"
                  >
                    Delete
                  </button>
                </>
              ) : (
                <button
                  onClick={handleTransaction}
                  className="btn btn-warning text-light px-4 py-2  fw-bold mt-4"
                  disabled={
                    trip?.quota_filled === trip?.quota ||
                    state.isLogin === false
                      ? true
                      : false
                  }
                >
                  {state.isLogin === false
                    ? "You Must Login"
                    : trip?.quota_filled === trip?.quota
                    ? "Sold Out"
                    : "Book Now"}
                </button>
              )}
              <Button
                onClick={() => addWishlist(trip.id)}
                className="btn btn-success ms-2 shadow-none text-light   fw-bold mt-4"
              >
                <img
                  style={{ width: "24px", color: "#fff", marginRight: "2px" }}
                  src="/assets/hear.png"
                  alt=""
                ></img>
                Wishlist
              </Button>
            </div>
          </div>
          <Footer />
          <Toaster />
        </Container>
      </div>
    </>
  );
}

export default DetailTrip;
