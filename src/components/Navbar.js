import React, { Component } from "react";
import Logo from "../assets/img/logo.png";
import Navitems from "./Navitems";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }

  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-2 col-sm-12 logo text-center">
            <a href="/" tolink="/">
              <img src={Logo} alt="โลโก้" width="160px" className="img-fluid" />
            </a>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="col-12">
              <div className="navbar navbar-expand-lg">
                <div
                  id="navbarCenteredExample"
                  className="collapse navbar-collapse justify-content-center"
                >
                  <ul className="navbar-nav">
                    <Navitems item="หน้าแรก" tolink="/" />
                    <Navitems item="ผลงานตัดต่อ" tolink="/workeditor" />
                    <Navitems item="ผลงาน Photoshop" tolink="/workphoto" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
