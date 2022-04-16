import { Row, Col, Label } from "reactstrap";
import { useState } from "react";
import DatePicker from "reactstrap-date-picker";
import TimeSelector from "./TimeSelector";

const convertedTime = (time) => {
  const timeString = time.toString();
  const convertedTime = timeString.slice(0, -2) + ":" + timeString.slice(-2);
  return convertedTime;
};

function RouteRows({ stop, index, schedulingStrategy, canAddCargo }) {
  const [pickUpDate, setPickUpDate] = useState(new Date().toISOString());

  const from = convertedTime(stop.openingHours.from);
  const to = convertedTime(stop.openingHours.to);

  return (
    <>
      <div className="row-container">
        <Row>
          <Col sm={4}>
            <h6>{stop.address}</h6>
            <p className="para">{stop.company}</p>
            <span className="subpara">Opening Hours: </span>
            <span>{from + " - " + to}</span>
          </Col>
          <Col sm={6} className="pickupdetails">
            <Row>
              <Col sm={4}>
                <Label className="labels"> Pick up date</Label>
                <DatePicker
                  value={pickUpDate}
                  onChange={(date) => setPickUpDate(date)}
                  showClearButton={false}
                  dateFormat="DD/MM/YYYY"
                />
              </Col>
              <Col>
                <TimeSelector text={"From"} defaultValue={"08:00"} />
              </Col>
              <Col>
                <TimeSelector text={"To"} defaultValue={"12:00"} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="red">+</span>
            <span className="red-underline">Gate reference</span>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RouteRows;
