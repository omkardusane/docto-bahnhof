import axios from "axios";
import { useState, useEffect } from "react";

export const useApiClient = <T,>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: T,
) => {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(url);
                setResponse(res.data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [method, url, data]);

    return { response, error, isLoading };
};
