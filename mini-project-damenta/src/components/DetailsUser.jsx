import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function DetailsUser({ id, show, onCloseDetail }) {
  const [recordDetails, setRecordsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const onLoadFetchData = async () => {
      //set spinner
      setIsLoading(true);
      try {
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        });
        const data = await response.json();
        setRecordsDetails(data.data);
      } catch (error) {
        console.error("Gagal Fetch Data!", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (id && show) {
      onLoadFetchData();
    }
  }, [id, show]);

  return (
    <Modal show={show} onHide={onCloseDetail}>
      <Modal.Header className="justify-content-center">
        <Modal.Title>Profile Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {isLoading ? (
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            <img src={recordDetails.avatar} alt="" />
            <h3>{`${recordDetails.first_name} ${recordDetails.last_name}`}</h3>
            <p>{recordDetails.email}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={onCloseDetail}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
