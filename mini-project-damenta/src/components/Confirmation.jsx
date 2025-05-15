import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Confirmation({
  show,
  handleClose,
  onDeleteItem,
  deleteDataStatus,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure want to delete this data?</Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={onDeleteItem}
          value={deleteDataStatus}
        >
          Yes
        </Button>
        <Button variant="danger" onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
