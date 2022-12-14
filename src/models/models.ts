import {NAMES} from '../context/names';

export type ArtworksDTO = {
  id: number;
  imageId: string;
  title: string;
  artistTitle: string;
  date: string;
  placeOfOrigin: string;
  categoryTitles: string[];
  mediumDisplay: string;
};

export interface State {
  loading: boolean;
  artworksData: ArtworksDTO[] | [];
}

interface ActionSetArtworks {
  type: NAMES.SET_ARTWORKS;
  artworksData: ArtworksDTO[];
}

interface ActionSetLoading {
  type: NAMES.SET_LOADING;
  loading: boolean;
}

export type Action = ActionSetArtworks | ActionSetLoading;

export type ContextProps = {
  state: State;
  dispatch: {
    setArtworksData(artworksData: ArtworksDTO[]): void;
    setLoading(loading: boolean): void;
  };
};
