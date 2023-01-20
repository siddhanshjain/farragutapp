import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import TableIcon from "../assets/img/icons/tableicon.png";
import paginationFactory from "react-bootstrap-table2-paginator";
import EyeIcon from "../assets/img/icons/eyeicon.svg";
import DeleteIcon from "../assets/img/icons/deleteicon.svg";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Reports() {
  const products = [
    {
      name: "Report 53464",
      date: "12/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "11/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "10/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "09/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Value",
      date: "09/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "06/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Critical val",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Report 53464",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Data val",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
    {
      name: "Data val",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",
      description: "It is a long established fact ..",
      action: "action",
    },
  ];
  function iconFormatter(cell, row) {
    return (
      <span>
        <button className="btn btn-theme-info btn-sm mb-10">
          <img src={EyeIcon} alt="" />
        </button>
        <button className="btn btn-theme-info btn-sm mb-10">
          <img src={DeleteIcon} alt="" />
        </button>
      </span>
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
      formatter: iconFormatter,
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      {from} to {to} of {size}
    </span>
  );
  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: products.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };
  function priceFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
      <div className="d-flex flex-direction-row">
        {filterElement}
        {column.text}
        {sortElement}
        <img
          src={TableIcon}
          width={"13px"}
          height={"13px"}
          alt={""}
          className="mt-2"
        />
      </div>
    );
  }

  return (
    <>
      <Container fluid className="shadow-box-wrapper application-page p-4">
        <Row className="d-flex align-items-center mb-3">
          <Col className="col-md-6">
            <form class="d-flex search-box">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </Col>
          <Col className="col-md-6">
            <div className="justify-content-end d-flex align-items-center">
              <NavLink
                to=""
                style={{ textDecoration: "none", color: "white" }}
                className="buttoncss1"
              >
                Add
              </NavLink>
            </div>
          </Col>
        </Row>
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          style={{ fontSize: "8px" }}
          bordered={false}
          filter={filterFactory()}
          pagination={paginationFactory(options)}
        />
      </Container>
    </>
  );
}

export default Reports;
