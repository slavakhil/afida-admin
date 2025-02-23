import axios from 'axios';

export const $api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.REACT_APP_API_URL,
});

$api.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${await sessionStorage
    .getItem('token')
    .then((res) => res?.access_token)}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        
        return $api.request(originalRequest);
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН');
        sessionStorage.removeItem('access_token');
      }
    }
    throw error;
  },
);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (
      error.response.status >= 500 &&
      error.config &&
      !error.config._isRetry
    ) {
    //   setErrorServerMessage(true);
    }
    throw error;
  },
);

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     if (error.response.status == 429) {
//       setErrorServerMessage(true);
//     }
//     throw error;
//   },
// );