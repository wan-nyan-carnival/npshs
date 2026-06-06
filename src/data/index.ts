const modules = import.meta.glob("./pokemon/*.ts", { eager: true });

export const pokemonList = Object.values(modules).map(
  (m: any) => m.default
);