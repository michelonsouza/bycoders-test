/* eslint-disable no-param-reassign */
import axios from 'axios';

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

baseApi.interceptors.request.use(config => {
  config.params = {
    ...(config?.params || {}),
    key: import.meta.env.VITE_APP_API_SECRET,
    regionCode: import.meta.env.VITE_APP_API_PARAM_REGION_CODE,
    maxResults: import.meta.env.VITE_APP_API_PARAM_MAX_RESULTS,
  };

  return config;
});

export { baseApi };
