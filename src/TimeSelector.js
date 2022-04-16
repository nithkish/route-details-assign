import { Input } from "reactstrap";
import { useState } from "react";

/* function to generate the array of times in 24Hr format */
const getTimeArray = () => {
  let times = [];
  for (var i = 0; i < 24; i++) {
    if (i < 10) times.push("0" + i + ":00");
    else times.push(i + ":00");
  }
  return times;
};

/*  TimeSelector dropdown component to select time, takes the label to be displayed 
 and the default time value as the props*/

const TimeSelector = ({ text, defaultValue }) => {
  const [time, setTime] = useState(defaultValue);
  const timeArray = getTimeArray();

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="group-time input-group-text">{text}</span>
        </div>
        <Input
          type="select"
          className="select-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {timeArray &&
            timeArray.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </Input>
      </div>
    </>
  );
};

export default TimeSelector;
