import { Zodios } from "@zodios/core";
import { endpoints } from "./endpoints";
import { ZodiosHooks } from "@zodios/react";

export const dashboardApiClient = new Zodios(
  "https://pokeapi.co/api/v2",
  [endpoints.getUserList],
  {
    validate: true,
    // axiosConfig: createAxiosConfig(),
  }
);

export const dashboardApiHooks = new ZodiosHooks(
  'dashboard',
  dashboardApiClient
);