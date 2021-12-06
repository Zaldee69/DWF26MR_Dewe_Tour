import { Modal, Button } from "react-bootstrap";
import TripCard from "../../Trip_Card/TripCard";
import { useState, useEffect } from "react";
import { API } from "../../../config/api";

function BigModal(props) {
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async (id = props.id) => {
    try {
      const response = await API.get("/transactions");
      setTransactions(response.data.data);
      console.log(props.quota);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Payment Approvement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="payment-img">
        <TripCard
          destination={props.destination}
          transport={props.transport}
          day={props.day}
          image={props.attachment}
          night={props.night}
          price={props.price}
          date={props.date}
          status={props.status}
          name={props.name}
          gender={props.gender}
          phone={props.phone}
          country={props.country}
          qty={props.qty}
          accomodation={props.accomodation}
          attachment={props.attachment}
          total={props.total}
        />
      </Modal.Body>
      <Modal.Footer>
        {props.status === "Approve" ||
          (props.status === "Cancel" ? (
            <></>
          ) : (
            <>
              <Button
                onClick={() => props.cancel()}
                className="fw-bold "
                variant="danger"
              >
                Cancel
              </Button>
              <Button
                onClick={() => props.approve()}
                className="fw-bold mx-3"
                variant="success"
              >
                Approve
              </Button>
            </>
          ))}
      </Modal.Footer>
    </Modal>
  );
}

export default BigModal;
