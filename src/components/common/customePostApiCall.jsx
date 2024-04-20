import { useState } from 'react';
import axios from 'axios';

const usePostRequest = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const postData = async (postData) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
        axios.post(url, postData)
          .then((response) => {
            setData(response.data);
            setStatus(response.status);
            resolve(response); 
          })
          .catch((error) => {
            setError(error.message);
            reject(error); 
          })
          .finally(() => {
            setIsLoading(false);
          });
    });
}

  return { data, isLoading, error, status, postData };
};

export default usePostRequest;
