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
                const response = await axios.get(url, { params: payload });
                setData(response.data);
                setStatus(response.status);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setStatus(response.status);
                setIsLoading(false);
            } 
        }

        fetchData(); 
        },[url, payload]);

        // Return a promise that resolves with data or rejects with error
        const getRequestPromise = () => {
            return new Promise((resolve, reject) => {
                if (data) {
                    resolve(data);
                } else if (error) {
                    reject(error);
                }
            });
        };

        return { data, isLoading, error ,status ,getRequestPromise };
}

export default useGetRequest;