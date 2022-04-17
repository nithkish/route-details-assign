import { Row, Col, Input, Label } from "reactstrap";
import FormGroupComponent from "./FormGroupComponent";

const placeholder = {
  dropdown: "Please select an option"
};

const CargoItemContainer = () => {
  return (
    <>
      <Row className="row-form">
        <Col sm={5}>
          <Label className="labels">Unloading Stop</Label>
          <Input type="select" defaultValue="">
            <option value="">{placeholder.dropdown}</option>
          </Input>
        </Col>
        <Col sm={4}>
          <Label className="labels">Type</Label>
          <Input type="select" defaultValue="">
            <option value="">{placeholder.dropdown}</option>
          </Input>
        </Col>
        <Col sm={3}>
          <Label className="labels">PO Number</Label>
          <Input type="text" />
        </Col>
      </Row>
      <Row className="row-form">
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
  );
};

export default CargoItemContainer;
