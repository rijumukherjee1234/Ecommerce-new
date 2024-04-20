import { useState, useEffect } from "react";
import axios from 'axios';

const useGetRequest = (url) =>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get(url);
                setData(response.data);
                setStatus(response.status);
            } catch (error) {
                setError(error.message);
                setStatus(response.status);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData(); 
        },[url]);

        return { data, isLoading, error ,status };
}

export default useGetRequest;