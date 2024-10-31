import axios from 'axios';
import {requestInterceptor, responseInterceptor} from './interceptors';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  // @ts-expect-error
  requestInterceptor.onSuccess,
  requestInterceptor.onFailed,
);

httpClient.interceptors.response.use(
  responseInterceptor.onSuccess,
  responseInterceptor.onFailed,
);

export default httpClient;
