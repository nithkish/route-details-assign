import { Label, Input } from "reactstrap";

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
