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
// import { useState } from 'react';

// const useApi = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const postData = async (url, data) => {
//     setLoading(true);
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const responseData = await response.json();
//       setLoading(false);
//       return responseData;
//     } catch (error) {
//       setLoading(false);
//       setError(error.message);
//       throw error;
//     }
//   };

//   return { postData, loading, error };
// };

// export default useApi;

