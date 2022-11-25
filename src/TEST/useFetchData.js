import { useState, useEffect } from "react";

export function useFetchData(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        let ignore = false;
        async function fetchData() {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    mode: "no-cors",
                    headers: {
                        "content-type": "application/json",
                        accept: "application/json",
                    },
                });
                if (response.ok) {
                    if (!ignore) {
                        console.log("HO PUTAIN ca m'enerve")
                        const fetchedData = await response.json();
                        setData(Array.isArray(fetchedData) ? fetchedData : [fetchedData]);
                    }
                } else {
                    console.log("Il va direct dans Else")
                    setError("Error 😡");
                }
            } catch (e) {
                setError("Error 😱");
            } finally {
                if (!ignore) {
                    setIsLoading(false);
                }
            }
        }
        fetchData();
        return () => {
            ignore = true;
            console.log(data);
            console.log(fetchData);
            
            
        };
    }, []);
    return {
        data,
        isLoading,
        error,
    };
}
