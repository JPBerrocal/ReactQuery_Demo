import { useEffect, useState } from "react";
import "./App.css";

const getRandomNumber = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await response.text();
  return +numberString;
};

export const App = () => {
  const [number, setNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getRandomNumber().then((n) => setNumber(n));
  }, []);

  useEffect(() => {
    if (number) {
      setIsLoading(false);
    }
  }, [number]);

  return (
    <>
      <div className="App App-header">
        {isLoading ? <h1>Cargando...</h1> : <h2>Numero aleatorio: {number}</h2>}
      </div>
    </>
  );
};

export default App;
