//Bootstrap component
import { Button, Modal, Form } from "react-bootstrap";

//Image
import Image2 from "../../../img/palm1.png";

//Hooks
import { useContext, useState } from "react";

//Global state
import { AuthContext } from "../../../context/AuthContextProvider";

//Axios config
import { API } from "../../../config/api";

const Login = ({ modalLogin, openModalRegister, closeModalLogin }) => {
  const { dispatch } = useContext(AuthContext);
  const [message, setMessage] = useState();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const loginOnChangeHandler = (e) => {
    setUserLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginSubmitHandler = async (e) => {
    try {
      //variabel for configuration content-type
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      //convert userLogin data to string
      const body = JSON.stringify(userLogin);
      //insert data user to database
      const response = await API.post("/login", body, config);
      // Notification
      if (response?.status === 200) {
        //send data to AuthContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      }
      window.location.reload();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <Modal show={modalLogin}>
        <Modal.Body className="modal-content">
          <img alt="" src={Image2}></img>
          <h2 className="text-center my-5">Login</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeModalLogin}
          ></button>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                onChange={loginOnChangeHandler}
                name="email"
                type="email"
                required
              />
              <p className="text-danger pt-1 ps-1" style={{ fontSize: "12px" }}>
                {message}
              </p>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                name="password"
                onChange={loginOnChangeHandler}
                type="password"
                required
              />
            </Form.Group>
            <div class="d-flex flex-column gap-2 ">
              <Button
                onClick={loginSubmitHandler}
                className="text-white fw-bold"
                variant="warning"
                type="submit"
                required
              >
                Submit
              </Button>
              <small className="text-center">
                Don't have an account ? click{" "}
                <a href onClick={() => openModalRegister()}>
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

export default Login;
