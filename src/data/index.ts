const modules = import.meta.glob("./pokemon/*.ts", { eager: true });

export const pokemonList = Object.values(modules)
  .map((m: any) => m.default)
  .sort((a: any, b: any) => a.no - b.no);