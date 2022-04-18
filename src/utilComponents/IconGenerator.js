import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faFlag } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const IconGenerator = ({ index, length }) => {
  return (
    <>
      <span className="fa-layers fa-fw fa-2x icon-class">
        <FontAwesomeIcon icon={faMapMarker} className="icon" />
        {index !== length - 1 ? (
          <span
            class="fa-layers-text fa-inverse"
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
