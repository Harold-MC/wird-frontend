interface IPokemonItem {
  id: number,
  name: string;
  url: string;
  isFavorite?: boolean
}

export interface IPokemonItemState {
  list: IPokemonItem[];
  loading: boolean;
  error: string | null;
  searchText: string
}

export default IPokemonItem;
