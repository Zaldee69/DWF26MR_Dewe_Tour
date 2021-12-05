//Bootstrap component
import { Button, Modal, Form, Alert } from "react-bootstrap";

//Image
import Image2 from "../../../img/palm1.png";

//Hooks
import { useState } from "react";

//Axios config
import { API } from "../../../config/api";

const Register = ({ registerModal, closeModalRegister, openModalLogin }) => {
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
  });

  const [message, setMessage] = useState();

  const registerOnChangeHandler = (e) => {
    setRegister((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      //variabel for configuration content-type
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //convert register data to string
      const body = JSON.stringify(register);
      //insert data user to database
      const response = await API.post("/register", body, config);
      console.log(response);
      setRegister({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        gender: "",
      });
      const alert = (
        <Alert variant="success" className="py-1">
          Register Success
        </Alert>
      );
      setMessage(alert);
    } catch (error) {
      console.log(error);
      const alert = (
        <Alert variant="danger" className="py-1">
          Register Failed
        </Alert>
      );
      setMessage(alert);
    }
  };

  return (
    <div>
      <Modal show={registerModal}>
        <Modal.Body className="modal-content position-relative">
          <div
            style={{ top: "120px", left: "170px" }}
            className="text-center position-absolute"
          >
            {message && message}
          </div>

          <img alt="" src={Image2}></img>
          <h2 className="text-center my-5">Register</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeModalRegister}
            required
          ></button>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicName">
              <Form.Label className="fw-bold">Fullname</Form.Label>
              <Form.Control
                name="fullName"
                onChange={registerOnChangeHandler}
                type="text"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                onChange={registerOnChangeHandler}
                type="email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                onChange={registerOnChangeHandler}
                type="password"
                name="password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPhone">
              <Form.Label className="fw-bold">Phone</Form.Label>
              <Form.Control
                onChange={registerOnChangeHandler}
                name="phone"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label className="fw-bold">Address</Form.Label>
              <Form.Control
                onChange={registerOnChangeHandler}
                as="textarea"
                name="address"
                rows={3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-4" controlId="gender">
              <Form.Label className="fw-bold">Gender</Form.Label>
              <Form.Control
                onChange={registerOnChangeHandler}
                name="gender"
                type="text"
                required
              />
            </Form.Group>
            <div class="d-flex flex-column gap-2 ">
              <Button
                className="text-white fw-bold"
                variant="warning"
                type="submit"
                onClick={registerSubmitHandler}
                required
              >
                Submit
              </Button>
              <small className="text-center">
                Have an account ? click{" "}
                <a href="" onClick={openModalLogin}>
                  Here
                </a>
              </small>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Register;
