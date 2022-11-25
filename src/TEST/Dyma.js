import { useState, useEffect } from "react";

export function Dyma(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // false ?
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function fetchData(url) {
            try {
                const response = await fetch(url, {
                  method: "GET",
                  mode: "no-cors",
                  headers: {
                  "content-type": "application/json",
                    "accept": "application/json"
                  },
              });
              if (response.ok) {
                if (!ignore) {
                    const fetchedData = await response.json();
                    setData(Array.isArray(fetchedData) ? fetchedData : [fetchedData]);
                }
            } else {
                setError("Error");
            }
        } catch (e) {
            setError("Error");
        } finally {
            if (!ignore) {
                setIsLoading(false);
            }
        }
    }
    fetchData();
    return () => {
        ignore = true;
    };
}, []);
return {
    data,
    isLoading,
    error,
};
}
