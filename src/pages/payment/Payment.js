import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import Navbar from "../../component/Navbar/Navbar";
import "./Payment.css";
import Footer from "../../component/Footer/Footer";
import TripCard from "../../component/Trip_Card/TripCard";
import toast, { Toaster } from "react-hot-toast";

function Payment() {
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const failedNotify = (str) => toast.error(str);

  // Fetching trip data from database
  const getTransaction = async () => {
    try {
      setIsLoading(true);
      const response = await API.get("/transaction");
      // Store trip data to useState variabel
      setTransaction(response.data.data);
      setIsLoading(true);
      console.log(response.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const paymentHandle = ({ id, form }) => {
    if (form.image === "") {
      failedNotify("You must upload payment proof");
    } else {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();

      formData.append("image", form.image[0], form.image[0].name);
      formData.append("status", "Pending");

      toast.promise(
        API.patch("/transaction/" + id, formData, config).then(() =>
          getTransaction()
        ),
        {
          loading: "Loading",
          success: "Payment Success ",
          error: "Payment Failed",
        }
      );
    }
  };

  useEffect(() => {
    getTransaction(id);
  }, []);

  return (
    <div>
      <div className="payment-container">
        <Navbar />
        {isLoading &&
          (transaction == 0
            ? !isLoading && (
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
              )
            : transaction
                .filter((el) => {
                  if (el.status === "Waiting Payment") {
                    return el;
                  }
                })
                .map((el, i) => {
                  return (
                    <div key={i} className="position-relative pb-5">
                      <TripCard
                        className="mt-5"
                        destination={el.trips?.title}
                        transport={el.trips?.transportation}
                        day={el.trips?.day}
                        image={el.attachment}
                        night={el.trips?.day}
                        price={el.trips?.price}
                        date={el.trips?.dateTrip}
                        status={el.status}
                        name={el.users.fullName}
                        gender={el.users.gender}
                        phone={el.users.phone}
                        country={el.trips?.country.name}
                        qty={el.counterQty}
                        accomodation={el.trips?.accomodation}
                        id={el.id}
                        total={el.total}
                        payment={paymentHandle}
                      />
                    </div>
                  );
                }))}

        <Toaster />
      </div>

      <Footer />
    </div>
  );
}

export default Payment;
