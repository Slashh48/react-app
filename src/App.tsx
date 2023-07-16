import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Subotica", "BeGe", "Arandjelovac"];
  return (
    <div>
      <ListGroup
        heading="Gradovi"
        items={items}
        onSelectItem={() => items}
      ></ListGroup>
    </div>
  );
}

export default App;
