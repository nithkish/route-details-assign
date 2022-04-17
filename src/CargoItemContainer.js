import { Row, Col, Input } from "reactstrap";
const CargoItemContainer = () => {
  return (
    <>
      <Row className="row-form">
        <Col sm={5}>
          <Input type="select" />
        </Col>
        <Col sm={4}>
          <Input type="select" />
        </Col>
        <Col sm={3}>
          <Input type="text" />
        </Col>
      </Row>
      <Row className="row-form">
        <Col sm={2}>
          <Input type="select" />
        </Col>
        <Col sm={3}>
          <Input type="select" />
        </Col>
        <Col>
          <Input type="text" />
        </Col>
        <Col>
          <Input type="text" />
        </Col>
        <Col>
          <Input type="text" />
        </Col>
      </Row>
    </>
  );
};

export default CargoItemContainer;
