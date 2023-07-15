import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="warning" onClick={() => console.log("Klik")}>
        Caos
      </Button>
    </div>
  );
}

export default App;
