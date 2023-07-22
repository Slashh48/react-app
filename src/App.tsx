import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  //Cukemberg je to imenovao Effect (retard), bolje da se zove afterRender
  useEffect(() => {
    //Side effect, ili ti mijenja nesto van ove komponente; Preciznije, mijenja state DOM-a
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "Moj Epp";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
