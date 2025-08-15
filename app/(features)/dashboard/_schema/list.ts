import * as z from "zod";

export const pokemonDataSchema = z.object({
  name: z.string(),
  url: z.string(),
});
export type PokemonData = z.infer<typeof pokemonDataSchema>;

export const pokemonResponseSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.null(),
  results: z.array(pokemonDataSchema),
});
export type PokemonResponse = z.infer<typeof pokemonResponseSchema>;
