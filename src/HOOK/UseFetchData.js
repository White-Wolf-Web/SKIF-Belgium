import { useState, useEffect } from "react";

export function UseFetchData(url) {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
        try {
        await fetch(url,{
            method: 'GET', 
            mode: 'no-cors', 
            headers: {
              'Content-Type': 'application/json'
         } })
         .then(response => response.json())
         .then((result) => {
              setIsLoaded(true);
              setData(result.data);
            })
        } catch (e) {
        setError('Error2');

        } finally {
        if (!ignore) {
        setIsLoaded(false);
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
        isLoaded,
        error,
        };
        }
        
        