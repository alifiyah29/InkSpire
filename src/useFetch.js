import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortContent = new AbortController();

    fetch(url, { signal: abortContent.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data from resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortContent.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
