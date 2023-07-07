import { useState, useEffect } from 'react';

export function useFetch(url, dependencies) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok)
          throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        const fetchedData = await res.json();
        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [url, ...dependencies]);

  return [error, isLoading, data];
}
