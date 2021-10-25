import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function ModalComp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="btn-payment fw-bold btn btn-warning py-2 px-5 text-light"
        onClick={handleShow}
      >
        Pay
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          Your payment will be confirmed within 1 x 24 hours To see orders click
          <a>Here</a> ,thank you
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;
