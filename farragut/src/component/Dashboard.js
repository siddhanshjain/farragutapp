import React from "react";

import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
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
                    <Link className="view-all" to="/users">
                      View All
                    </Link>
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
                    <Link className="view-all" to="/reports">
                      View All
                    </Link>
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
                    <Link className="view-all">View All</Link>
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
                    <Link className="view-all">View All</Link>
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
