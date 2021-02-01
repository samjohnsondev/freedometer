import { useState, useEffect } from 'react';

export function useFetch(initialUrl, initialOptions){
    const [url, setUrl] = useState(initialUrl);
    const [options, setOptions] = useState(initialOptions);
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        let isEffectRunning = true;

        async function fetchData(){
            try{
                const response = await fetch(url, options)
                const json = await response.json();

                if(!isEffectRunning) { return };

                setData(json);
            }catch(error){
                setError(error)
            }

            setLoading(false);
        }

        fetchData();

        return () => {
            isEffectRunning = false;
        }

    }, [url, options])

    return { data, setUrl, setOptions, error, loading}
}