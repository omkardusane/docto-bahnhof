import { useState, useEffect } from 'react';

export function useGetCall(props: {
    url: string;
    params?: Record<string, any>;
    mockData?: any[];
    dependencies?: any[];
}) {
    const [response, setResponse] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (Math.random() < 0.1) {
                setError('Failed to fetch data.');
            } else {
                setError(null);
                setResponse(props.mockData || []);
            }
        }, 300); // Simulate network delay
    }, props.dependencies || []);

    return {
        response,
        loading,
        error
    };
}
