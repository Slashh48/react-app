import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("kliko si")} />
    </div>
  );
}

export default App;
