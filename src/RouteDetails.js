import PropTypes from "prop-types";
import RouteRows from "./RouteRows";

function RouteDetails({ stops, schedulingStrategy, canAddCargo }) {
  return (
    <>
      <h4 style={{ float: "left" }}>Route</h4>
      <div className="container">
        {stops.length > 0 &&
          stops.map((stop, index) => {
            return (
              <RouteRows
                stop={stop}
                index={index}
                schedulingStrategy={schedulingStrategy}
                canAddCargo={canAddCargo}
              />
            );
          })}
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
