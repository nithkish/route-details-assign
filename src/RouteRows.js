import { Row, Col, Label } from "reactstrap";
import { useEffect, useState } from "react";
import DatePicker from "reactstrap-date-picker";
import TimeSelector from "./TimeSelector";
import CargoItemContainer from "./CargoItemContainer";

const convertedTime = (time) => {
  const timeString = time.toString();
  const convertedTime = timeString.slice(0, -2) + ":" + timeString.slice(-2);
  return convertedTime;
};

function RouteRows({ stop, index, schedulingStrategy, canAddCargo }) {
  const [pickUpDate, setPickUpDate] = useState(new Date().toISOString());
  const [showCargo, setShowCargo] = useState(false);
  const [showDateTime, setShowDateTime] = useState(true);
  const [showTime, setShowTime] = useState(true);

  const from = convertedTime(stop.openingHours.from);
  const to = convertedTime(stop.openingHours.to);

  useEffect(() => {}, [index, schedulingStrategy]);

  useEffect(() => {
    if (!canAddCargo) setShowCargo(false);
  }, [canAddCargo]);

  return (
    <>
      <div className="row-container">
        <Row>
          <Col sm={4}>
            <h6>{stop.address}</h6>
            <p className="para">{stop.company}</p>
            <span className="subpara">Opening Hours: </span>
            <span className="opening-hours">{from + " - " + to}</span>
          </Col>
          <Col sm={6} className="pickupdetails">
            <Row>
              <Col sm={4}>
                <Label className="labels">
                  {index > 0 ? "Arrival date" : "Pick up date"}
                </Label>
                <DatePicker
                  value={pickUpDate}
                  onChange={(date) => setPickUpDate(date)}
                  showClearButton={false}
                  dateFormat="DD/MM/YYYY"
                />
              </Col>
              <Col hidden={!showTime}>
                <TimeSelector text={"From"} defaultValue={"08:00"} />
              </Col>
              <Col hidden={!showTime}>
                <TimeSelector text={"To"} defaultValue={"12:00"} />
              </Col>
            </Row>
            <Row hidden={showDateTime}>
              <Col>
                <Row>
                  <p className="subpara">Estimated Arrival</p>
                </Row>
                <Row>
                  <span style={{ textAlign: "left" }}>-</span>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="red-underline" style={{ marginTop: "20px" }}>
                  +Gate reference
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row hidden={!canAddCargo}>
          <Row>
            <Col sm={2} style={{ width: "10%" }}>
              <p
                className={showCargo ? "cargo-title" : "red-underline"}
                onClick={() => (showCargo ? "" : setShowCargo(!showCargo))}
              >
                {showCargo ? "Cargo Item" : "+Add Cargo"}
              </p>
            </Col>
            <Col>
              <hr className="line" />
            </Col>
          </Row>
          <Row hidden={!showCargo}>
            <Row>
              <CargoItemContainer />
            </Row>
            <Row className="row-form">
              <Col sm={10}>
                <hr className="line" style={{ maxWidth: "100%" }} />
              </Col>
              <Col>
                <p
                  className="cargo-title"
                  style={{ cursor: "pointer", float: "right" }}
                  onClick={() => setShowCargo(!showCargo)}
                >
                  Cancel
                </p>
              </Col>
              <Col>
                <p className="save">Save</p>
              </Col>
            </Row>
          </Row>
        </Row>
      </div>
    </>
  );
}

export default RouteRows;
