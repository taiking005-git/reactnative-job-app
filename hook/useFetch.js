import { useState, useEffect } from 'react'
import axios from 'axios'

import { RAPID_API_KEY } from '@env';

const rapidApiKey = "d9f1329f31msh4b098e25c56a9fdp1a5790jsn29d48ec338d9"

const useFetch = async (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },

        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };



    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error);
            // console.log(error.message);
            alert(`${error.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    // console.log(data);
    return { data, isLoading, error, refetch };
}

export default useFetch;