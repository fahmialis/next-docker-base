import { createAxiosInstance } from '@/lib/axios';
import { Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';
import { endpoints } from './endpoints';

export const dashboardApiClient = new Zodios(
  'https://pokeapi.co/api/v2',
  [endpoints.getUserList],
  {
    validate: true,
    axiosInstance: createAxiosInstance(),
  }
);

export const dashboardApiHooks = new ZodiosHooks(
  'dashboard',
  dashboardApiClient
);
