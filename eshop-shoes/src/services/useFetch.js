import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${baseUrl}${url}`, options);

                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    throw response;
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, options]);

    return { data, error, loading };
}