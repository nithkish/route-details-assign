import { Row, Col, Input, Label } from "reactstrap";
import FormGroupComponent from "../utilComponents/FormGroupComponent";
import { useState, useEffect } from "react";

const placeholder = {
  dropdown: "Please select an option"
};

/* Component displaying the content of the form for adding cargo*/
/* TODO - add variables and setters mapped with each element*/

const CargoItemContainer = ({ showCargo }) => {
  const [render, setRender] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  //useEffect hook to add transition for Cargo details form
  useEffect(() => {
    if (showCargo) {
      setRender(showCargo);

      setTimeout(() => {
        setFadeIn(showCargo);
      }, 200);
    } else {
      setFadeIn(false);

      setTimeout(() => {
        setRender(false);
      }, 400);
    }
  }, [showCargo]);

  return (
    render && (
      <>
        <Row className={`row-form ${fadeIn ? "show" : "hide"}`}>
          <Col sm={5}>
            <Label className="labels">Unloading Stop</Label>
            <Input type="select" defaultValue="" className="select-option">
              <option value="">{placeholder.dropdown}</option>
            </Input>
          </Col>
          <Col sm={4}>
            <Label className="labels">Type</Label>
            <Input type="select" defaultValue="" className="select-option">
              <option value="">{placeholder.dropdown}</option>
            </Input>
          </Col>
          <Col sm={3}>
            <Label className="labels">PO Number</Label>
            <Input type="text" />
          </Col>
        </Row>
        <Row className={`row-form ${fadeIn ? "show" : "hide"}`}>
          <Col sm={2}>
            <Label className="labels">Quantity</Label>
            <Input type="text" />
          </Col>
          <Col sm={3}>
            <FormGroupComponent label={"Total Weight"} unit={"kg"} />
          </Col>
          <Col>
            <FormGroupComponent label={"Length"} unit={"cm"} />
          </Col>
          <Col>
            <FormGroupComponent label={"Width"} unit={"cm"} />
          </Col>
          <Col>
            <FormGroupComponent label={"Height"} unit={"cm"} />
          </Col>
        </Row>
      </>
    )
  );
};

export default CargoItemContainer;
