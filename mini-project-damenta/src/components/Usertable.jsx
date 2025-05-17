import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/Spinner";
import DataTable from "react-data-table-component";
import Confirmation from "./Confirmation";
import DetailsUser from "./DetailsUser";

export default function Usertable() {
  const columns = [
    {
      name: "Personnel ID",
      selector: (row) => row.id,
      width: "20%",
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.first_name,
      width: "20%",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
      width: "20%",
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      width: "20%",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Button
            variant="success"
            size="sm"
            className="me-2"
            value={"viewData"}
            onClick={(e) => handleShowDetail(row.id, e.target.value)}
          >
            👁️
          </Button>
          <Button
            variant="warning"
            size="sm"
            className="me-2"
            onClick={() => handleDeleteItem(row.id)}
          >
            ✏️
          </Button>
          <Button
            variant="danger"
            size="sm"
            value={"deleteData"}
            onClick={(e) => handleShow(row.id, e.target.value)}
          >
            🗑️
          </Button>
        </>
      ),
      width: "20%",
      ignoreRowClick: true,
    },
  ];

  async function handleDeleteItem() {
    console.log(`masuk sini`);
    console.log(`id yang diselect saat ini: ${selectedId}`);
    console.log(`action yang diselect saat ini: ${selectedAction}`);

    //delete data
    const newDataAfterDelete = records.filter((record) => {
      return record.id !== selectedId;
    });
    console.log(`setelah data kena delete:`);
    console.log(newDataAfterDelete);
    setRecords(newDataAfterDelete);
    setShow(false);
  }

  const [records, setRecords] = useState([]);

  const [recordsAPI, setRecordsAPI] = useState([]);

  const [isDelete, setIsDeleteData] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetail = (id, action) => {
    setShowDetails((prev) => !prev);
    setSelectedId(id);
    setSelectedAction(action);
    console.log(id);
    console.log(action);
  };

  const handleCloseDetail = () => {
    setShowDetails((prev) => !prev);
    setSelectedId("");
    setSelectedAction("");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, action) => {
    setSelectedId(id);
    setSelectedAction(action);
    setShow(true);
  };

  useEffect(() => {
    const onLoadFetchData = async () => {
      const response = await fetch("https://reqres.in/api/users?page=", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });

      const data = await response.json();
      console.log("ini records api");
      console.log(data.data);

      setRecordsAPI(data.data);
      setRecords(data.data);
    };
    onLoadFetchData();
  }, []);

  function handleFilter(param) {
    if (!param.target.value) {
      setRecords(recordsAPI);
      return;
    }

    const newData = records.filter((rowItem) => {
      return (
        rowItem.first_name.toLowerCase().includes(param.target.value) ||
        rowItem.email.toLowerCase().includes(param.target.value) ||
        rowItem.last_name.toLowerCase().includes(param.target.value)
      );
    });

    console.log("ini hasil new Data");
    console.log(newData);
    setRecords(newData);
  }

  return (
    <>
      <Container>
        <div className="text-end">
          <input
            type="text"
            name="txtSearchBar"
            id="searchBar"
            placeholder="Search here"
            onChange={handleFilter}
          />
        </div>
        <DataTable
          columns={columns}
          data={records}
          paginationPerPage={2}
          paginationRowsPerPageOptions={[2, 3, 4, 5, 6]}
          fixedHeader
          pagination
          highlightOnHover
        ></DataTable>
      </Container>
      <Confirmation
        show={show}
        handleClose={handleClose}
        deleteDataStatus={isDelete}
        onDeleteItem={handleDeleteItem}
      ></Confirmation>
      <DetailsUser
        id={selectedId}
        show={showDetails}
        onCloseDetail={handleCloseDetail}
      ></DetailsUser>
    </>
  );
}
