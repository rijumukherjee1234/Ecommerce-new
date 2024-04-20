import { useState, useEffect } from "react";
import axios from 'axios';

const useGetRequest = (url) =>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        });

        return { data, isLoading, error };
}

export default useGetRequest;