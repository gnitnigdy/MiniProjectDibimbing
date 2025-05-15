import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import DataTable from "react-data-table-component";

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
    // {
    //   name: "Age",
    //   selector: (row) => row.age,
    //   width: "25%",
    //   sortable: true,
    // },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Button
            variant="success"
            size="sm"
            className="me-2"
            onClick={() => handleDeleteItem(row.id)}
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
            onClick={() => handleDeleteItem(row.id)}
          >
            🗑️
          </Button>
        </>
      ),
      width: "20%",
      ignoreRowClick: true,
    },
  ];

  function handleDeleteItem(param) {
    console.log(param);
  }

  const [records, setRecords] = useState([]);

  const [recordsAPI, setRecordsAPI] = useState([]);

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
        fixedHeader
        pagination
        highlightOnHover
      ></DataTable>
    </Container>
  );
}
