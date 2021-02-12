import React, { useEffect, useState } from "react";
import axios from "axios";

const useApi = () => {
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState("/api/objects?page=1");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        console.log("result", result);

        setData({ hits: result.data });
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useApi;
