import Navbar from "../../component/Navbar/Navbar";

import { Container } from "react-bootstrap";

import Footer from "../../component/Footer/Footer";
import TableComp from "../../component/Items/table/Table";

import "./ListTransaction.css";

const ListTransaction = () => {
  return (
    <div>
      <Container fluid className="list_transaction-container">
        <Navbar />
        <Container>
          <TableComp />
        </Container>

        <Footer />
      </Container>
    </div>
  );
};

export default ListTransaction;
