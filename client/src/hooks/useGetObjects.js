import { useMutation } from "react-query";

const getObjectUrl = (page) => `/api/objects?page=${page}`;

const getObjects = async ({ page }) => {
  try {
    const response = await fetch(getObjectUrl(page), {
      method: "GET",
    });

    const json = await response.json();

    if (response.error) throw new Error(response.error);

    return json;
  } catch (error) {
    throw new Error(error);
  }
};

const useGetObjects = () => {
  //    const queryCache = useQueryCache();

  const [mutate] = useMutation(getObjects);

  return (page) => {
    mutate({ page });
  };
};

export default useGetObjects;
