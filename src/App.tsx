import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Capricciousa",
    toppings: ["Kechap", "Sir"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Shunka"] });
  };
  return (
    <>
      <h1>{pizza.toppings + " "}</h1>
      <button onClick={handleClick}>Update</button>
    </>
  );
}

export default App;
