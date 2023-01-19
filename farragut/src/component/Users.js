import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Card, Container, Row, Col } from "react-bootstrap";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

function Users() {
  function priceFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
        {filterElement}
        {column.text}
        {sortElement}
      </div>
    );
  }
  const columns = [
    {
      dataField: "name",
      text: "Name of report",
    },
    {
      dataField: "date",
      text: "Created Date",
      sort: true,
      headerFormatter: priceFormatter,
    },
    {
      dataField: "user",
      text: "Customer User",
    },
    {
      dataField: "public",
      text: "Public User",
    },
    {
      dataField: "description",
      text: "Description",
    },
    {
      dataField: "action",
      text: "Actions",
    },
  ];
  const products = [
    {
      name: "Report 53464",
      date: "12/10/2022",
      user: "Yes",
      public: "Yes",
      description:
        "It is a long established fact that a reader will be distracted...",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "11/10/2022",
      user: "Yes",
      public: "Yes",
      description:
        "It is a long established fact that a reader will be distracted...",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "10/10/2022",
      user: "Yes",
      public: "Yes",
      description:
        "It is a long established fact that a reader will be distracted...",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "09/10/2022",
      user: "Yes",
      public: "Yes",
      description:
        "It is a long established fact that a reader will be distracted...",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "09/10/2022",
      user: "Yes",
      public: "Yes",
      description:
        "It is a long established fact that a reader will be distracted...",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "06/10/2022",
      user: "Yes",
      public: "Yes",
      description:
        "It is a long established fact that a reader will be distracted...",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",
      description:
        "It is a long established fact that a reader will be distracted...",
      action: "action",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          bordered={false}
          filter={filterFactory()}
        />
      </div>
    </>
  );
}

export default Users;
