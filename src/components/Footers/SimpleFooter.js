/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import SocialMediaButton from "components/Buttons/SocialMediaButton";
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for checking my work!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  You can reach me on this platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <SocialMediaButton
                  description="Follow me"
                  icon="twitter"
                  color="twitter"
                  link="https://twitter.com/emmanjoseph"
                />
                <SocialMediaButton
                  description="Like"
                  icon="facebook-square"
                  color="facebook"
                  link="https://www.facebook.com/emmanjoseph"
                />
                <SocialMediaButton
                  description="Follow me"
                  icon="dribbble"
                  color="dribbble"
                  link="https://dribbble.com/emmanjoseph"
                />
                <SocialMediaButton
                  description="Star on Github"
                  icon="github"
                  color="github"
                  link="https://github.com/emmanjoseph"
                />
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <div className=" copyright">
                ?? {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=adsr-footer"
                  target="_blank"
                >
                  Emmanuel Joseph
                </a>
                .
              </div>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
