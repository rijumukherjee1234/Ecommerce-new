import { useState } from 'react';
import axios from 'axios';

const usePostRequest = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (postData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, postData);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, postData };
};

export default usePostRequest;
