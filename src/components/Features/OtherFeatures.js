import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

export const OtherFeatures = () => {
  return (
    <section className="section section-lg">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-2 ml-lg-auto" md="6">
            <div className="position-relative pl-md-5">
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("assets/img/theme/OtherFeatures.png")}
              />
            </div>
          </Col>
          <Col className="order-lg-1" lg="6">
            <div className="info info-horizontal info-hover-primary mt-5">
              <div className="d-flex px-3">
                <div>
                  <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                    <i className="ni ni-html5 text-info" />
                  </div>
                </div>
                <div className="pl-4">
                  <h5 className="title">For Developers</h5>
                  <p>
                    The time is now for it to be okay to be great. People in
                    this world shun people for being great. For being a bright
                    color. For standing out. But the time is now.
                  </p>
                  <a
                    className="text-info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="info info-horizontal info-hover-primary mt-5">
              <div className="d-flex px-3">
                <div>
                  <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                    <i className="ni ni-satisfied" />
                  </div>
                </div>
                <div className="pl-4">
                  <h5 className="title ">Awesome Support</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever.
                  </p>
                  <a
                    className="text-success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-active-40" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-warning">Modular Components</h5>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever.
                    </p>
                    <a
                      className="text-warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
