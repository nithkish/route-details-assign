import { Label, Input } from "reactstrap";

/* Component to be used for text boxes with appended input group
the Component takes the text label and the unit for adding the input group*/
const FormGroupComponent = ({ label, unit }) => {
  return (
    <>
      <Label className="labels">{label}</Label>
      <div className="input-group mb-3" style={{ marginTop: "25px" }}>
        <Input type="text" className="cargo-text" />
        <div className="input-group-append">
          <span className="group-cargo input-group-text">{unit}</span>
        </div>
      </div>
    </>
  );
};

export default FormGroupComponent;
