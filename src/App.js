import React, { useState } from "react";
import RouteDetails from "./components/RouteDetails";
import Footer from "./utilComponents/Footer";
import Header from "./utilComponents/Header";
import stops from "./stops.json";
import { Col, Row, Input, Label } from "reactstrap";
import "./styles.css";
function App() {
  const [schedulingStrategy, setSchedulingStrategy] = useState("fixed");
  const [canAddCargo, setCanAddCargo] = useState(false);

  return (
    <div className="App">
      <Header />
      <Row
        style={{ maxWidth: "80%", marginLeft: "30px", marginBottom: "30px" }}
      >
        <Col sm={3}>
          <Label style={{ marginTop: "6px" }}>Scheduling Strategy</Label>
        </Col>
        <Col sm={3}>
          <Input
            type="select"
            className="drop-down"
            value={schedulingStrategy}
            onChange={(e) => setSchedulingStrategy(e.target.value)}
          >
            <option value="fixed">Fixed</option>
            <option value="semiFlexible">Semi flexible</option>
            <option value="flexible">Flexible</option>
          </Input>
        </Col>
        <Col sm={3}>
          <label style={{ marginTop: "6px", float: "left" }}>
            <input
              type="checkbox"
              checked={canAddCargo}
              onChange={(e) => setCanAddCargo(e.target.checked)}
            />
            {" Can add cargo "}
          </label>
        </Col>
      </Row>

      <RouteDetails
        stops={stops}
        schedulingStrategy={schedulingStrategy}
        canAddCargo={canAddCargo}
      />
      <Footer />
    </div>
  );
}

export default App;
