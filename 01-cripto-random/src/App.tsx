import { useQuery } from "@tanstack/react-query";
import "./App.css";

const getRandomNumber = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await response.text();

  return +numberString;
};

export const App = () => {
  //
  const query = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumber,
  });

  return (
    <>
      <div className="App App-header">
        {query.isFetching ? (
          <h1>Cargando...</h1>
        ) : (
          <h2>Numero aleatorio: {query.data}</h2>
        )}

        {!query.isLoading && query.isError && <h3>{`${query.error}`}</h3>}

        <button onClick={() => query.refetch()} disabled={query.isFetching}>
          {query.isFetching ? "Cargando..." : "Cargar nuevo numero"}
        </button>
      </div>
    </>
  );
};

export default App;
