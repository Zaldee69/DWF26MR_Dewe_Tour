import { Modal, Button } from "react-bootstrap";
import TripCard from "../../Trip_Card/TripCard";

function BigModal(props) {
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
          day="2"
          image="/assets/ss.png"
          night="5"
          transport="Qatar Airways"
          destination="Fun Tassie Vacation"
          country="4"
          price="2.000.000"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button className="fw-bold " variant="danger">
          Cancel
        </Button>
        <Button className="fw-bold mx-3" variant="success">
          Approve
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BigModal;
