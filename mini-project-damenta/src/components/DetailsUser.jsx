import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function DetailsUser({ id, onShow }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [recordDetails, setRecordsDetails] = useState([]);

  useEffect(() => {
    const onLoadFetchData = async () => {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });

      const data = await response.json();
      console.log("ini records details api");
      console.log(data.data);

      setRecordsDetails(data.data);
    };
    onLoadFetchData();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="justify-content-center">
        <Modal.Title>Profile Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img src={recordDetails.avatar} alt="" />
        <h3>{`${recordDetails.first_name} ${recordDetails.last_name}`}</h3>
        <p>{recordDetails.email}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
