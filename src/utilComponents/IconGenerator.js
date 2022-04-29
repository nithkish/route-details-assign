import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faFlag } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

/* Generates List of icons with overlap of index or end flag
to be used in a iterative method which takes current index and total length of the object  */

const IconGenerator = ({ index, length }) => {
  return (
    <>
      <span className="fa-layers fa-fw fa-2x icon-class">
        <FontAwesomeIcon icon={faMapMarker} className="icon" />
        {index !== length - 1 ? (
          <span
            className="fa-layers-text fa-inverse"
            style={{ fontSize: "40%", fontWeight: "700", height: "25px" }}
          >
            {index + 1}
          </span>
        ) : (
          <FontAwesomeIcon
            icon={faFlag}
            inverse
            transform="shrink-10 rotate-10"
          />
        )}
      </span>
    </>
  );
};

export default IconGenerator;
