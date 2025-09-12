import { loadingAtom } from '@/app/store/loadingAtom';
import axios, { AxiosInstance } from 'axios';
import { getDefaultStore } from 'jotai';

const store = getDefaultStore();

export function createAxiosInstance(): AxiosInstance {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 10000,
  });

  instance.interceptors.request.use(
    (config) => {
      store.set(loadingAtom, true);
      const baseURL = config.baseURL;
      config.baseURL = baseURL;

      return config;
    },
    (error) => {
      store.set(loadingAtom, false);

      console.error('❌ Request Error:', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      store.set(loadingAtom, false);

      console.log({ response });
      return response;
    },
    (error) => {
      store.set(loadingAtom, false);

      console.error('❌ Response Error:', error);
      return Promise.reject(error);
    }
  );

  return instance;
}
