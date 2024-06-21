import { useQuery } from "@tanstack/react-query";

const getRandomNumber = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await response.text();

  return +numberString;
};

export const useRandom = () => {
  //
  const query = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumber,
    retry: 1,
    enabled: false,
  });

  return query;
};
