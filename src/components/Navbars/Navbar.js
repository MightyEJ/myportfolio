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
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  NavItem,
  NavLink,
} from "reactstrap";
import MediaMenu from "components/Menus/MediaMenu";
import NavItemWithTooltip from "./NavItemWithTooltip";

class NavbarMenu extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                {/* <img
                  alt="..."
                  src={require("assets/img/brand/argon-react-white.png")}
                /> */}
                <span className="display-4">ejoseph</span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                {/* <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div> */}
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">My Work</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <MediaMenu
                          title="Frontend"
                          description="Look at my front end projects here"
                          color="primary"
                          icon="spaceship"
                          scrollTo={this.props.scrollTo}
                        />
                        <MediaMenu
                          title="Backend"
                          description="Look at my backend projects here"
                          color="success"
                          icon="palette"
                          scrollTo={this.props.scrollTo}
                        />
                        <MediaMenu
                          title="Design"
                          description="Look at my design projects here"
                          color="warning"
                          icon="ui-04"
                          scrollTo={this.props.scrollTo}
                        />
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/profile"
                      // onClick={(e) => e.preventDefault()}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {/* <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="ni ni-favourite-28" />
                      <span className="nav-link-inner--text d-lg-none">
                        Discover
                      </span>
                    </NavLink>
                  </NavItem> */}
                  <NavItemWithTooltip
                    title="Facebook"
                    description="Like us on Facebook"
                    icon="facebook-square"
                    link="https://www.facebook.com/emmanuel.t.joseph.5/"
                  />
                  <NavItemWithTooltip
                    title="Instagram"
                    description="Follow us on Instagram"
                    icon="instagram"
                    link="https://www.instagram.com/emmanjoseph"
                  />
                  <NavItemWithTooltip
                    title="Twitter"
                    description="Follow us on Twitter"
                    icon="twitter-square"
                    link="https://twitter.com/emmanjoseph"
                  />
                  <NavItemWithTooltip
                    title="Github"
                    description="Star us on Github"
                    icon="github"
                    link="https://github.com/MightyEJ"
                  />
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default NavbarMenu;
