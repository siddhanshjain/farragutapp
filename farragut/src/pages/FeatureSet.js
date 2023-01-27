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

function FeatureSet() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const products = [
    {
      name: "Feature 53464",
      date: "12/10/2022",
      user: "Yes",
      public: "Yes",
      action: "action",
    },
    {
      name: "Feature 53464",
      date: "11/10/2022",
      user: "Yes",
      public: "Yes",
      action: "action",
    },
    {
      name: "Feature 53464",
      date: "10/10/2022",
      user: "Yes",
      public: "Yes",

      action: "action",
    },
    {
      name: "Feature 53464",
      date: "09/10/2022",
      user: "Yes",
      public: "Yes",

      action: "action",
    },
    {
      name: "Value",
      date: "09/10/2022",
      user: "Yes",
      public: "Yes",

      action: "action",
    },
    {
      name: "Feature 53464",
      date: "06/10/2022",
      user: "Yes",
      public: "Yes",

      action: "action",
    },
    {
      name: "Critical val",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",

      action: "action",
    },
    {
      name: "Feature 53464",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",

      action: "action",
    },
    {
      name: "Data val",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",

      action: "action",
    },
    {
      name: "Data val",
      date: "04/10/2022",
      user: "Yes",
      public: "Yes",

      action: "action",
    },
  ];
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  function handleDeleteModalShow(breakpoint) {
    setDeleteModalShow(true);
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
        <button onClick={handleDeleteModalShow} className="sdfs btn btn-theme-info btn-sm mb-10">
          <img src={DeleteIcon} alt="" />
        </button>
      </span>
    );
  }
  const columns = [
    {
      dataField: "name",
      text: "Feature Set Name",
    },
    {
      dataField: "date",
      text: "Features",
      sort: true,
      headerFormatter: priceFormatter,
    },
    {
      dataField: "user",
      text: "Reports",
    },
    {
      dataField: "public",
      text: "Customer Names",
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
      <Header header={"Feature Set"} />
      {/* Delete Model */}
        <Modal show={deleteModalShow} centered backdropClassName="delete-modal-bg" className="centered-delete-modal" onHide={() => setDeleteModalShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-content text-center">
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.2963 21.3954C26.2463 20.2287 26.1463 18.9037 25.9963 17.4204V17.1704H27.0213C27.288 17.1704 27.5796 17.1621 27.8963 17.1454C28.213 17.1287 28.463 17.1037 28.6463 17.0704L28.6963 17.2704C28.663 17.5871 28.6296 17.9037 28.5963 18.2204C28.5796 18.5371 28.5546 18.8621 28.5213 19.1954C28.5046 19.5621 28.4796 19.9287 28.4463 20.2954C28.4296 20.6621 28.413 21.0287 28.3963 21.3954L28.0963 29.1454H26.5713L26.2963 21.3954ZM27.3213 34.8704C26.9046 34.8704 26.5463 34.7204 26.2463 34.4204C25.963 34.1204 25.8213 33.7621 25.8213 33.3454C25.8213 32.9121 25.9713 32.5537 26.2713 32.2704C26.5713 31.9871 26.9213 31.8454 27.3213 31.8454C27.7546 31.8454 28.113 31.9871 28.3963 32.2704C28.6796 32.5537 28.8213 32.9121 28.8213 33.3454C28.8213 33.7621 28.6796 34.1204 28.3963 34.4204C28.113 34.7204 27.7546 34.8704 27.3213 34.8704Z" fill="black"/>
                <path d="M31.3971 9.75L44.8205 33C46.5526 36 44.3875 39.75 40.9234 39.75H14.0766C10.6125 39.75 8.44744 36 10.1795 33L23.6029 9.75001C25.3349 6.75 29.6651 6.75 31.3971 9.75Z" stroke="#F7BE16" stroke-width="3"/>
              </svg>
              <p>Are you sure want to delete the report <span className="bold">Report Name</span>.</p>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="outline-danger" className="me-2 red-btn-outline" onClick={() => setDeleteModalShow(false)}>
                Cancel
              </Button>
              <Button variant="danger" className="ms-2 red-btn">
                Add
              </Button>
          </Modal.Footer>
        </Modal>
      {/* Delete Model end */}
      <Tabs
        defaultActiveKey="feature"
        id="uncontrolled-tab-example"
        className="tabstyle"
      >
        <Tab eventKey="feature" title="FEATURE SET">
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

export default FeatureSet;
