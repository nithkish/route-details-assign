import PropTypes from "prop-types";
import RouteRows from "./RouteRows";
import IconGenerator from "../utilComponents/IconGenerator";
import { Row, Col } from "reactstrap";

/* Main component which is combined with multiple child component to 
create the actual Route Details Page*/

function RouteDetails({ stops, schedulingStrategy, canAddCargo }) {
  return (
    <>
      <div>
        <h4 style={{ float: "left", marginLeft: "48px" }}>Route</h4>
        <br />
        <div className="main-div">
          <Row>
            {stops.length > 0 &&
              stops.map((stop, index) => {
                return (
                  <Row>
                    <Col sm={1}>
                      <IconGenerator index={index} length={stops.length} />
                    </Col>
                    <Col>
                      <RouteRows
                        stop={stop}
                        index={index}
                        schedulingStrategy={schedulingStrategy}
                        canAddCargo={canAddCargo}
                      />
                    </Col>
                  </Row>
                );
              })}
          </Row>
        </div>
      </div>
    </>
  );
}

RouteDetails.propTypes = {
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      company: PropTypes.string,
      openingHours: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired
      }),
      schedule: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired
      })
    })
  ).isRequired,
  schedulingStrategy: PropTypes.oneOf(["fixed", "semiFlexible", "flexible"])
    .isRequired,
  canAddCargo: PropTypes.bool.isRequired
};

export default RouteDetails;
