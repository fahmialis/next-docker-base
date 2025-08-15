import { makeEndpoint } from "@zodios/core";
import { pokemonResponseSchema } from "../_schema/list";

const getUserList = makeEndpoint({
  alias: "getUserList",
  method: "get",
  path: "pokemon",
  response: pokemonResponseSchema,
});

export const endpoints = {
  getUserList,
};
