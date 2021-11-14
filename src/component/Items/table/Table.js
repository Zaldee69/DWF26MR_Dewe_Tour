import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import BigModal from "../../Items/modal/BigModal";
import { API } from "../../../config/api";

const TableComp = () => {
  const [modalShow, setModalShow] = useState(false);
  const [transactions, setTransactios] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await API.get("/transactions");
      setTransactios(response.data.data);
      console.log(response.data.data[0].trips.accomodation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Trip</th>
            <th>Proof Of Payment</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((el, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{el.users.fullName}</td>
                <td>{el.trips.title}</td>
                <td>{el.attachment}</td>
                <td className="text-danger">{el.status}</td>
                <td className="text-center">
                  <img
                    alt=""
                    onClick={() => setModalShow(true)}
                    src="/assets/search.png"
                  ></img>
                </td>
                <BigModal
                  destination={el.trips.title}
                  transport={el.trips.transportation}
                  show={modalShow}
                  day={el.trips.day}
                  image={el.attachment}
                  night={el.trips.day}
                  price={el.trips.price}
                  onHide={() => setModalShow(false)}
                  date={el.trips.dateTrip}
                  status={el.status}
                  name={el.users.fullName}
                  gender={el.users.gender}
                  phone={el.users.phone}
                  country={el.trips.country.name}
                  qty={el.counterQty}
                  accomodation={el.trips.accomodation}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComp;
