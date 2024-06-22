import { useQuery } from "@tanstack/react-query";
import { getGithubApi } from "../../api/githubAPI";
import { Label } from "../interfaces/label";
import { sleep } from "../../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await getGithubApi.get<Label[]>("/labels");
  console.log(data);
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
    refetchOnWindowFocus: false,
  });

  return labelsQuery;
};
