import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Achtung achtung</Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        Caos
      </Button>
    </div>
  );
}

export default App;
