import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
function ModalComp() {
  const userLogin = JSON.parse(localStorage.getItem("user_login"));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {userLogin?.isLogin ? (
        <div>
          <Button
            className="btn-payment fw-bold btn btn-warning py-2 px-5 text-light"
            onClick={handleShow}
          >
            Pay
          </Button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Body className="bg-warning rounded">
              <p className="text-light shadow-none border-none outline-none">
                Your payment will be confirmed within 1 x 24 hours To see orders
                click
                <a>Here</a> ,thank you
              </p>
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        <Link to="/">
          <Button className="btn-payment fw-bold btn btn-warning py-2 px-5 text-light">
            Pay
          </Button>
        </Link>
      )}
    </>
  );
}

export default ModalComp;
