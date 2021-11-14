import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import Navbar from "../../component/Navbar/Navbar";
import "./Payment.css";
import Footer from "../../component/Footer/Footer";
import TripCard from "../../component/Trip_Card/TripCard";
import { Container } from "react-bootstrap";

function Payment() {
  const [transaction, setTransaction] = useState([]);
  const { id } = useParams();

  // Fetching trip data from database
  const getTransaction = async () => {
    try {
      const response = await API.get("/transaction");
      // Store trip data to useState variabel
      setTransaction(response.data.data);
      console.log(transaction == 0 ? true : false);
    } catch (error) {
      console.log(error);
    }
  };

  const paymentHandle = async ({ id, form }) => {
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();

      formData.append("image", form.image[0], form.image[0].name);
      formData.append("status", "Pending");

      await API.patch("/transaction/" + id, formData, config);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransaction(id);
  }, []);

  return (
    <div>
      <div className="payment-container">
        <Navbar />

        {transaction == 0 ? (
          <div className="container-sm ">
            <img
              style={{
                width: "700px",
                marginLeft: "300px",
                marginTop: "80px",
              }}
              alt=""
              src="assets/empty.svg"
            ></img>
          </div>
        ) : (
          transaction?.map((el, i) => {
            return (
              <div key={i} className="position-relative pb-5">
                <TripCard
                  className="mt-5"
                  destination={el.trips.title}
                  transport={el.trips.transportation}
                  day={el.trips.day}
                  image={el.attachment}
                  night={el.trips.day}
                  price={el.trips.price}
                  date={el.trips.dateTrip}
                  status={el.status}
                  name={el.users.fullName}
                  gender={el.users.gender}
                  phone={el.users.phone}
                  country={el.trips.country.name}
                  qty={el.counterQty}
                  accomodation={el.trips.accomodation}
                  id={el.id}
                  payment={paymentHandle}
                />
              </div>
            );
          })
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Payment;
