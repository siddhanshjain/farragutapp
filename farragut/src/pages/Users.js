import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import TableIcon from "../assets/img/icons/tableicon.png";
import paginationFactory from "react-bootstrap-table2-paginator";
import EyeIcon from "../assets/img/icons/eyeicon.svg";
import DeleteIcon from "../assets/img/icons/deleteicon.svg";
import FilterIcon from "../assets/img/icons/filtericon.svg";
import EditIcon from "../assets/img/icons/editicon.svg";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { colourOptions } from "./data.ts";
import Header from "../component/Header";

function Users() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const products = [
    {
      name: "Sarah Tucker",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",
      action: "action",
    },
    {
      name: "Wynn Dozeaplikayshun",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",
      action: "action",
    },
    {
      name: "Laura Norda",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",

      action: "action",
    },
    {
      name: "Sarah Tucker",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",

      action: "action",
    },
    {
      name: "Value",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",

      action: "action",
    },
    {
      name: "Sarah Tucker",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",
      action: "action",
    },
    {
      name: "Critial Lord",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",

      action: "action",
    },
    {
      name: "Sarah Tucker",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",

      action: "action",
    },
    {
      name: "Wynn Dozeaplikayshun",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",

      action: "action",
    },
    {
      name: "Wynn Dozeaplikayshun",
      date: "+1 2928931529",
      user: "s.tuker@gmail.com",
      group: "view",
      public: "Admin, Super Admin",
      staff: "view",

      action: "action",
    },
  ];
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  function textFormatter(cell, row) {
    return (
      <span>
        <p style={{ color: "#DA291C", textDecoration: "underline" }}>view</p>
      </span>
    );
  }
  function iconFormatter(cell, row) {
    return (
      <span>
        <button className="btn btn-theme-info btn-sm mb-10">
          <img src={EyeIcon} alt="" />
        </button>
        <button className="btn btn-theme-info btn-sm mb-10">
          <img src={EditIcon} alt="" />
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
      text: "Customer Name",
    },
    {
      dataField: "user",
      text: "Email Address",
    },
    {
      dataField: "date",
      text: "Phone Number",
      sort: true,
      headerFormatter: priceFormatter,
    },
    {
      dataField: "group",
      text: "USER GROUP",
      formatter: textFormatter,
    },
    {
      dataField: "public",
      text: "Feature Set",
    },
    {
      dataField: "staff",
      text: "Customer staff",
      formatter: textFormatter,
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
      <Header header={"Users"} />
      <Tabs
        defaultActiveKey="customer"
        id="uncontrolled-tab-example"
        className="tabstyle"
      >
        <Tab eventKey="customer" title="CUSTOMER">
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
                  <button type="button" class="btn btn-outline-danger">
                    <img src={FilterIcon} alt="" />
                    Filter
                  </button>
                  <NavLink
                    to=""
                    style={{ textDecoration: "none", color: "white" }}
                    className="buttoncss1 mx-3"
                    onClick={handleShow}
                  >
                    Add
                  </NavLink>
                  {/* Model */}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    className="model-component-wrapper"
                    onHide={() => setShow(false)}
                    backdropClassName="fullscreen-modal-bg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add Feature Set</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Feature Set Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Customer Name"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Reports</Form.Label>
                          <Select
                            defaultValue={[colourOptions[2], colourOptions[3]]}
                            isMulti
                            name="colors"
                            options={colourOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Application</Form.Label>
                          <Select
                            defaultValue={[colourOptions[2], colourOptions[3]]}
                            isMulti
                            name="colors"
                            options={colourOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-start">
                      <Button
                        variant="outline-danger"
                        className="me-2 red-btn-outline"
                        onHide={() => setShow(false)}
                      >
                        Cancel
                      </Button>
                      <Button variant="danger" className="ms-2 red-btn">
                        Add
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/* Model end */}
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
          </Container>{" "}
        </Tab>
      </Tabs>
    </>
  );
}

export default Users;
