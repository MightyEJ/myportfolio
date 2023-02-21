import { SimpleCard } from "components/Cards/SimpleCard";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const ThreeCards = () => {
  return (
    <section className="section section-lg pt-lg-0 mt--75">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <SimpleCard
                  icon="spaceship"
                  title="FrontEnd"
                  description="My frontend skills"
                  color="primary"
                  badges={["React", "React-Native", "Vue", "Angular"]}
                />
              </Col>
              <Col lg="4">
                <SimpleCard
                  icon="palette"
                  title="Backend"
                  description="My Backend Skills"
                  color="success"
                  badges={["NodeJS", "Javascript", "ES6", "Express", "MongoDB"]}
                />
              </Col>
              <Col lg="4">
                <SimpleCard
                  icon="ui-04"
                  title="Design"
                  description="My Design Skills"
                  color="warning"
                  badges={["HTML5", "Figma", "XD", "Photoshop"]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThreeCards;
