import { Row, Col, Label } from "reactstrap";
import { useEffect, useState } from "react";
import DatePicker from "reactstrap-date-picker";
import TimeSelector from "../utilComponents/TimeSelector";
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
  const [className, setClassName] = useState("red-underline");
  const [cargoText, setCargoText] = useState("+Add Cargo");

  const from = convertedTime(stop.openingHours.from);
  const to = convertedTime(stop.openingHours.to);

  /*useEffect Hook check conditions and display components based on 
  the scheduling strategy and index of the stop*/
  useEffect(() => {
    if (schedulingStrategy === "fixed") {
      setShowTime(false);
      index > 0 ? setShowDateTime(false) : setShowDateTime(true);
    } else if (schedulingStrategy === "semiFlexible") {
      setShowTime(true);
      index > 0 ? setShowDateTime(false) : setShowDateTime(true);
    } else {
      setShowTime(true);
      setShowDateTime(true);
    }
  }, [index, schedulingStrategy]);

  useEffect(() => {
    if (!canAddCargo) setShowCargo(false);
  }, [canAddCargo]);

  //useEffect hook for Transition of Cargo Item Header
  useEffect(() => {
    if (showCargo) {
      setTimeout(() => {
        setClassName("cargo-title");
        setCargoText("Cargo Item");
      }, 200);
    } else
      setTimeout(() => {
        setClassName("red-underline");
        setCargoText("+Add Cargo");
      }, 400);
  }, [showCargo]);

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
            <Row hidden={!showDateTime}>
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
              <Col>
                {showTime && (
                  <TimeSelector text={"From"} defaultValue={"10:00"} />
                )}
              </Col>
              <Col>
                {showTime && (
                  <TimeSelector text={"To"} defaultValue={"12:00"} />
                )}
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
            <Col sm={2} style={{ width: "11%" }}>
              <p
                className={className}
                onClick={() => (showCargo ? "" : setShowCargo(!showCargo))}
              >
                {cargoText}
              </p>
            </Col>
            <Col>
              <hr className="line" />
            </Col>
          </Row>
          <Row>
            <Row style={{ marginLeft: "12px" }}>
              <CargoItemContainer showCargo={showCargo} />
            </Row>
            <Row className="row-form" hidden={!showCargo}>
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
