import {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

export const requestInterceptor = {
  onSuccess: (
    config: AxiosRequestConfig | InternalAxiosRequestConfig,
  ): AxiosRequestConfig => {
    return config;
  },
  onFailed: (error: AxiosError): AxiosError => {
    return error;
  },
};

export const responseInterceptor = {
  onSuccess: (response: AxiosResponse): any => {
    return response;
  },
  onFailed: (error: AxiosError): never => {

    throw new Error(error.message || 'Ha ocurrido un error');
  },
};
