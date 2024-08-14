type GroceryList = { [item: string]: number };

type InappropriateAction = string[];
type InappropriateActionBySituation = {
  [situation: string]: InappropriateAction;
};

type Character = { id: number; name: string; status: string; species: string };
// Requires the key characterId to be a number. TypeScript will still convert characterId to a string because it is an object key.
type CharactersById = { [characterId: number]: Character };
