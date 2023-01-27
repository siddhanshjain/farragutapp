import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Header from "../component/Header";

const Application = () => {
  // const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <Header header={"Application"} />
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
            <div className="justify-content-end d-flex align-items-center application-form">
              <Button onClick={handleShow} to="" className="buttoncss1">
                Add
              </Button>

              {/* Model */}
              <Modal
                show={show}
                fullscreen={fullscreen}
                className="model-component-wrapper"
                onHide={() => setShow(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Application Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Workspace Id"
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="formFileLg" className="mb-3">
                      <Form.Label>Upload Logo</Form.Label>
                      <Form.Control
                        type="file"
                        size="lg"
                        placeholder="Select"
                        className="choose-file"
                        id="formFile"
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
        <Row className="">
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="application-card">
              <Card.Body>
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 30.8479C16.8111 30.8479 16.6281 30.8243 16.451 30.7771C16.274 30.7299 16.1028 30.6591 15.9375 30.5646L5.3125 24.4729C4.98194 24.2841 4.72222 24.0302 4.53333 23.7115C4.34444 23.3927 4.25 23.0327 4.25 22.6313V11.0146C4.25 10.6132 4.35035 10.2473 4.55104 9.9167C4.75174 9.58614 5.01736 9.32642 5.34792 9.13753L15.9729 3.36462C16.1382 3.27017 16.3035 3.20524 16.4688 3.16982C16.634 3.13441 16.8111 3.1167 17 3.1167C17.1889 3.1167 17.366 3.13441 17.5312 3.16982C17.6965 3.20524 17.8618 3.27017 18.0271 3.36462L28.6521 9.13753C28.9826 9.32642 29.2483 9.58614 29.449 9.9167C29.6497 10.2473 29.75 10.6132 29.75 11.0146V22.6313C29.75 23.0327 29.6556 23.3927 29.4667 23.7115C29.2778 24.0302 29.0181 24.2841 28.6875 24.4729L18.0625 30.5646C17.8972 30.6591 17.726 30.7299 17.549 30.7771C17.3719 30.8243 17.1889 30.8479 17 30.8479ZM12.9625 13.5292C13.5056 12.9861 14.1253 12.5434 14.8219 12.2011C15.5184 11.8587 16.2444 11.6875 17 11.6875C17.7556 11.6875 18.4816 11.8587 19.1781 12.2011C19.8747 12.5434 20.4944 12.9861 21.0375 13.5292L26.4562 10.3417L17 5.31253L7.54375 10.3417L12.9625 13.5292ZM15.9375 28.1209V22.2063C14.7097 21.8757 13.6944 21.2323 12.8917 20.2761C12.0889 19.3198 11.6875 18.2278 11.6875 17C11.6875 16.7639 11.6993 16.516 11.7229 16.2563C11.7465 15.9966 11.8174 15.7132 11.9354 15.4063L6.375 12.1125V22.6313L15.9375 28.1209ZM17 20.1875C17.8972 20.1875 18.6528 19.8747 19.2667 19.249C19.8806 18.6233 20.1875 17.8736 20.1875 17C20.1875 16.1028 19.8806 15.3473 19.2667 14.7334C18.6528 14.1195 17.8972 13.8125 17 13.8125C16.1264 13.8125 15.3767 14.1195 14.751 14.7334C14.1253 15.3473 13.8125 16.1028 13.8125 17C13.8125 17.8736 14.1253 18.6233 14.751 19.249C15.3767 19.8747 16.1264 20.1875 17 20.1875ZM18.0625 28.1209L27.625 22.6313V12.1125L22.0646 15.4063C22.1826 15.7368 22.2535 16.0261 22.2771 16.274C22.3007 16.5219 22.3125 16.7639 22.3125 17C22.3125 18.2278 21.9111 19.3198 21.1083 20.2761C20.3056 21.2323 19.2903 21.8757 18.0625 22.2063V28.1209Z"
                          fill="#747474"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="d-flex align-items-center justify-content-center btn edit-btn"
                      to="/users"
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
                <Row className="application-card-content mt-1">
                  <Col className="col-md-12">
                    <h4 className="numbers">Application</h4>
                    <p className="body-title">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Application;
