import { useEffect, useReducer, useState } from "react";
import "./App.css";

const getRandomNumber = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await response.text();

  return +numberString;
};

export const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [key, forceFetch] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setIsLoading(true);
    getRandomNumber()
      .then((n) => setNumber(n))
      .catch((e) => setError(e.message));
  }, [key]);

  useEffect(() => {
    if (number) {
      setIsLoading(false);
    }
  }, [number]);

  useEffect(() => {
    if (error) {
      setIsLoading(false);
    }
  }, [error]);

  return (
    <>
      <div className="App App-header">
        {isLoading ? <h1>Cargando...</h1> : <h2>Numero aleatorio: {number}</h2>}

        {!isLoading && error && <h3>{error}</h3>}

        <button
          onClick={() => {
            forceFetch();
          }}
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Cargar nuevo numero"}
        </button>
      </div>
    </>
  );
};

export default App;
