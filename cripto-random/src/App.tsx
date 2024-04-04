import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="App App-header">
        <h2>Numero aleatorio:</h2>
      </div>
    </>
  );
};

export default App;
