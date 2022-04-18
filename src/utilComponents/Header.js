import React from "react";
import "./index.css";
import { Row } from "reactstrap";

/* Header component to display Logo*/

const Header = () => (
  <div className="header">
    <Row>
      <img
        style={{ height: "40px" }}
        alt="InstaFreight"
        src="https://static.instafreight.de/shippers/img/logo.svg"
      />
    </Row>
  </div>
);

export default Header;
