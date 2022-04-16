import React, { useState } from "react";
import RouteDetails from "./RouteDetails";
import stops from "./stops.json";
import { Col, Row, Input } from "reactstrap";
import "./styles.css";
function App() {
  const [schedulingStrategy, setSchedulingStrategy] = useState("fixed");
  const [canAddCargo, setCanAddCargo] = useState(false);

  return (
    <div className="App">
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

      <label>
        <input
          type="checkbox"
          checked={canAddCargo}
          onChange={(e) => setCanAddCargo(e.target.checked)}
        />
        {" Can add cargo "}
      </label>
      <Row>
        <Col>
          <RouteDetails
            stops={stops}
            schedulingStrategy={schedulingStrategy}
            canAddCargo={canAddCargo}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
