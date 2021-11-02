import { Table } from "react-bootstrap";
import { useState } from "react";
import BigModal from "../../Items/modal/BigModal";

const TableComp = () => {
  const [modalShow, setModalShow] = useState(false);
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>6D/4N Fun Tassie Vaca ...</td>
            <td>bni.jpg</td>
            <td className="text-warning">Pending</td>
            <td className="text-center">
              <img
                alt=""
                onClick={() => setModalShow(true)}
                src="/assets/search.png"
              ></img>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Botoh</td>
            <td>6D/4N Fun Tassie Vaca ...</td>
            <td>bni.jpg</td>
            <td className="text-success">Approve</td>
            <td className="text-center">
              <img
                onClick={() => setModalShow(true)}
                src="/assets/search.png"
              ></img>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sawat</td>
            <td>6D/4N Fun Tassie Vaca ...</td>
            <td>bni.jpg</td>
            <td className="text-danger">Cancel</td>
            <td className="text-center">
              <img
                onClick={() => setModalShow(true)}
                src="/assets/search.png"
              ></img>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Cacapaw</td>
            <td>6D/4N Fun Tassie Vaca ...</td>
            <td>bri.jpg</td>
            <td className="text-danger">Cancel</td>
            <td className="text-center">
              <img
                onClick={() => setModalShow(true)}
                src="/assets/search.png"
              ></img>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Resi</td>
            <td>6D/4N Fun Tassie Vaca ...</td>
            <td>bca.jpg</td>
            <td className="text-success">Approve</td>
            <td className="text-center">
              <img
                onClick={() => setModalShow(true)}
                src="/assets/search.png"
              ></img>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Mark</td>
            <td>6D/4N Fun Tassie Vaca ...</td>
            <td>bni.jpg</td>
            <td className="text-warning">Pending</td>
            <td className="text-center">
              <img
                onClick={() => setModalShow(true)}
                src="/assets/search.png"
              ></img>
            </td>
          </tr>
        </tbody>
      </Table>
      <BigModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default TableComp;
