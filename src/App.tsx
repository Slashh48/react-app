import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Zupanja", "Baranja", "Osijek", "Golubac", "Subotica"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Gradovi"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
