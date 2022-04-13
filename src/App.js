import "./styles.css";
import { Button } from "reactstrap";

export default function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("abc")} />
    </div>
  );
}
