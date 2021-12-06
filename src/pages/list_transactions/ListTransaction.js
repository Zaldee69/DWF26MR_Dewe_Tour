import Navbar from "../../component/Navbar/Navbar";
import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import BigModal from "../../component/Items/modal/BigModal";
import { API } from "../../config/api";

import Footer from "../../component/Footer/Footer";

import "./ListTransaction.css";

const ListTransaction = () => {
  const [modalShow, setModalShow] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [userTransaction, setUserTransaction] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await API.get("/transactions");
      setTransactions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getTransactionsByID = async (id) => {
    setModalShow(!modalShow);
    try {
      const response = await API.get("/user-transaction/" + id);
      setUserTransaction(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelPayment = async () => {
    try {
      const status = {
        status: "Cancel",
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const quota = {
        quota_filled:
          userTransaction.trips.quota_filled - userTransaction.counterQty,
      };

      await API.patch(
        "/transactions/admin/list-transaction/" + userTransaction?.id,
        status,
        config
      );
      await API.patch("/trip/" + userTransaction.trips.id, quota, config);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const approvePayment = async () => {
    try {
      const status = {
        status: "Approve",
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await API.patch(
        "/transactions/admin/list-transaction/" + userTransaction?.id,
        status,
        config
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Container fluid className="list_transaction-container ">
        <Navbar />

        <Container>
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

                    <td>
                      <a
                        href={el.attachment}
                        className="text-primary fw-light fs-6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {el.attachment}
                      </a>
                    </td>
                    <td
                      className={` ${
                        el.status == "Pending"
                          ? "text-warning"
                          : el.status == "Approve"
                          ? "text-success"
                          : "text-danger"
                      }  `}
                    >
                      {el.status}
                    </td>
                    <td className="text-center">
                      <img
                        alt=""
                        onClick={() => getTransactionsByID(el.id)}
                        src="/assets/search.png"
                      ></img>
                    </td>
                  </tr>
                );
              })}
              <BigModal
                destination={userTransaction.trips?.title}
                transport={userTransaction.trips?.transportation}
                show={modalShow}
                total={userTransaction?.total}
                day={userTransaction.trips?.day}
                image={userTransaction?.attachment}
                night={userTransaction.trips?.night}
                price={userTransaction.trips?.price}
                onHide={() => setModalShow(false)}
                date={userTransaction.trips?.dateTrip}
                status={userTransaction?.status}
                name={userTransaction.users?.fullName}
                gender={userTransaction.users?.gender}
                phone={userTransaction.users?.phone}
                country={userTransaction.trips?.country.name}
                qty={userTransaction?.counterQty}
                id={userTransaction?.id}
                accomodation={userTransaction.trips?.accomodation}
                attachment={userTransaction?.attachment}
                quota={userTransaction.trips?.quota}
                approve={approvePayment}
                cancel={cancelPayment}
              />
            </tbody>
          </Table>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default ListTransaction;
