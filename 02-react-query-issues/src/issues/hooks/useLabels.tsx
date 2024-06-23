import { useQuery } from "@tanstack/react-query";
import { getGithubApi } from "../../api/githubAPI";
import { Label } from "../interfaces/label";
import { sleep } from "../../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await getGithubApi.get<Label[]>("/labels");
  return data;
};

/**
 * Custom hook that retrieves labels from github.
 *
 * @return {void}
 */
export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, //esta en ms, 1 hora
    refetchOnWindowFocus: false,
    //initialData: [], //data de iniacializacion se usa si ya se tiene de antemano datos reales y no hay que hacer una peticion hasta que se cumpla el staleTime
    placeholderData: [
      //data por defecto, se saco de la respuesta del API
      {
        id: 2281766624,
        node_id: "MDU6TGFiZWwyMjgxNzY2NjI0",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduling%20Profiler",
        name: "Component: Scheduling Profiler",
        color: "1dc3d6",
        default: false,
      },
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
      },
    ],
  });

  return labelsQuery;
};
