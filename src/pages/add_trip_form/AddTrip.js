import { Container, Form, Row, Col } from "react-bootstrap";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import "./AddTrip.css";

const AddTrip = () => {
  return (
    <div>
      <Container fluid className="add-trip">
        <Navbar />
        <Container className="add-trip-container">
          <Form className="">
            <Form.Group className="mb-3" controlId="titleTrip">
              <Form.Label className="fw-bold">Title Trip</Form.Label>
              <Form.Control type="text" name="titleTrip" />
            </Form.Group>
            <Form.Label className="fw-bold">Country</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Japan</option>
              <option value="2">Indonesia</option>
              <option value="3">Australia</option>
            </Form.Select>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="accomodation">
              <Form.Label className="fw-bold">Accomodation</Form.Label>
              <Form.Control type="text" name="accomodation" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="transportation">
              <Form.Label className="fw-bold">Transportation</Form.Label>
              <Form.Control type="text" name="transportation" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="eat">
              <Form.Label className="fw-bold">Eat</Form.Label>
              <Form.Control type="eat" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form>
              <Row>
                <Form.Label className="fw-bold">Duration</Form.Label>
                <Col xs={2}>
                  <div className="d-flex gap-3 align-items-center">
                    <Form.Control />
                    <p className="fw-bold">Day</p>
                  </div>
                </Col>
                <Col xs={2}>
                  <div className="d-flex gap-3 align-items-center">
                    <Form.Control />
                    <p className="fw-bold">Night</p>
                  </div>
                </Col>
              </Row>
            </Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control as="textarea" name="description" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="fw-bold">Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <button
              className="btn-warning btn fw-bold text-light"
              type="submit"
            >
              Add Trip
            </button>
          </Form>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default AddTrip;
