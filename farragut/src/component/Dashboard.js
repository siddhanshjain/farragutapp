import React from "react";
import "../assets/css/dashboard.css";

import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

function Dashboard() {
  return (
    <>
      <Header header={"Dashboard"} />
      <Container fluid>
        <Row>
          <Col lg="6" sm="6" className="card-col">
            <Card className="card-stats">
              <Card.Header className="p-3">
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                    <h3 className="card-title mb-0">Users</h3>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button
                      className="view-all btn bg-white d-flex align-items-center"
                      to="/users"
                    >
                      View All{""}
                      <svg
                        className="ms-1"
                        width="10"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.374993 9.54169C0.263882 9.40281 0.204853 9.25003 0.197909 9.08336C0.190964 8.91669 0.249993 8.77086 0.374993 8.64586L4.04166 4.97919L0.354159 1.29169C0.243048 1.18058 0.190964 1.03128 0.197909 0.843778C0.204853 0.656278 0.263882 0.506972 0.374993 0.395861C0.513882 0.256972 0.663187 0.191 0.822909 0.197945C0.982631 0.204889 1.12499 0.270861 1.24999 0.395861L5.39583 4.54169C5.46527 4.61114 5.51388 4.68058 5.54166 4.75003C5.56944 4.81947 5.58333 4.89586 5.58333 4.97919C5.58333 5.06253 5.56944 5.13892 5.54166 5.20836C5.51388 5.27781 5.46527 5.34725 5.39583 5.41669L1.27083 9.54169C1.14583 9.66669 0.999992 9.72572 0.833325 9.71878C0.666659 9.71183 0.513882 9.65281 0.374993 9.54169Z"
                          fill="#DA291C"
                        />
                      </svg>
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col className="col-md-3">
                    <h3 className="numbers">32</h3>
                    <p className="body-title">Customer</p>
                  </Col>
                  <Col className="col-md-1 d-flex algin-items-center">
                    <div class="vr p-0" style={{ height: "115px" }}></div>
                  </Col>
                  <Col className="col-md-3">
                    <h3 className="numbers">90</h3>
                    <p className="body-title">Customer Staff</p>
                  </Col>
                  <Col className="col-md-1 d-flex algin-items-center">
                    <div class="vr p-0" style={{ height: "115px" }}></div>
                  </Col>
                  <Col className="col-md-3">
                    <h3 className="numbers">08</h3>
                    <p className="body-title">User Group</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" sm="6" className="card-col">
            <Card className="card-stats">
              <Card.Header className="p-3">
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                    <h3 className="card-title mb-0">Report</h3>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button className="view-all btn bg-white" to="/reports">
                      View All{""}
                      <svg
                        className="ms-1"
                        width="10"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.374993 9.54169C0.263882 9.40281 0.204853 9.25003 0.197909 9.08336C0.190964 8.91669 0.249993 8.77086 0.374993 8.64586L4.04166 4.97919L0.354159 1.29169C0.243048 1.18058 0.190964 1.03128 0.197909 0.843778C0.204853 0.656278 0.263882 0.506972 0.374993 0.395861C0.513882 0.256972 0.663187 0.191 0.822909 0.197945C0.982631 0.204889 1.12499 0.270861 1.24999 0.395861L5.39583 4.54169C5.46527 4.61114 5.51388 4.68058 5.54166 4.75003C5.56944 4.81947 5.58333 4.89586 5.58333 4.97919C5.58333 5.06253 5.56944 5.13892 5.54166 5.20836C5.51388 5.27781 5.46527 5.34725 5.39583 5.41669L1.27083 9.54169C1.14583 9.66669 0.999992 9.72572 0.833325 9.71878C0.666659 9.71183 0.513882 9.65281 0.374993 9.54169Z"
                          fill="#DA291C"
                        />
                      </svg>
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col className="col-md-12">
                    <h3 className="numbers">560</h3>
                    <p className="body-title">Total</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" sm="6" className="card-col">
            <Card className="card-stats">
              <Card.Header className="p-3">
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                    <h3 className="card-title mb-0">Feature Set</h3>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button className="view-all btn bg-white">
                      View All{""}
                      <svg
                        className="ms-1"
                        width="10"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.374993 9.54169C0.263882 9.40281 0.204853 9.25003 0.197909 9.08336C0.190964 8.91669 0.249993 8.77086 0.374993 8.64586L4.04166 4.97919L0.354159 1.29169C0.243048 1.18058 0.190964 1.03128 0.197909 0.843778C0.204853 0.656278 0.263882 0.506972 0.374993 0.395861C0.513882 0.256972 0.663187 0.191 0.822909 0.197945C0.982631 0.204889 1.12499 0.270861 1.24999 0.395861L5.39583 4.54169C5.46527 4.61114 5.51388 4.68058 5.54166 4.75003C5.56944 4.81947 5.58333 4.89586 5.58333 4.97919C5.58333 5.06253 5.56944 5.13892 5.54166 5.20836C5.51388 5.27781 5.46527 5.34725 5.39583 5.41669L1.27083 9.54169C1.14583 9.66669 0.999992 9.72572 0.833325 9.71878C0.666659 9.71183 0.513882 9.65281 0.374993 9.54169Z"
                          fill="#DA291C"
                        />
                      </svg>
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col className="col-md-12">
                    <h3 className="numbers">36</h3>
                    <p className="body-title">Total</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" sm="6" className="card-col">
            <Card className="card-stats">
              <Card.Header className="p-3">
                <Row>
                  <Col xs="6" className="d-flex align-items-center">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                    <h3 className="card-title mb-0">Application</h3>
                  </Col>
                  <Col
                    xs="6"
                    className="texxt-right d-flex align-items-center justify-content-end"
                  >
                    <button className="view-all btn bg-white">
                      View All{""}
                      <svg
                        className="ms-1"
                        width="10"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.374993 9.54169C0.263882 9.40281 0.204853 9.25003 0.197909 9.08336C0.190964 8.91669 0.249993 8.77086 0.374993 8.64586L4.04166 4.97919L0.354159 1.29169C0.243048 1.18058 0.190964 1.03128 0.197909 0.843778C0.204853 0.656278 0.263882 0.506972 0.374993 0.395861C0.513882 0.256972 0.663187 0.191 0.822909 0.197945C0.982631 0.204889 1.12499 0.270861 1.24999 0.395861L5.39583 4.54169C5.46527 4.61114 5.51388 4.68058 5.54166 4.75003C5.56944 4.81947 5.58333 4.89586 5.58333 4.97919C5.58333 5.06253 5.56944 5.13892 5.54166 5.20836C5.51388 5.27781 5.46527 5.34725 5.39583 5.41669L1.27083 9.54169C1.14583 9.66669 0.999992 9.72572 0.833325 9.71878C0.666659 9.71183 0.513882 9.65281 0.374993 9.54169Z"
                          fill="#DA291C"
                        />
                      </svg>
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col className="col-md-12">
                    <h3 className="numbers">22</h3>
                    <p className="body-title">Total</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
