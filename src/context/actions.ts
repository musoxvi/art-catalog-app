import {ArtworksDTO} from '../models/models';
import {NAMES} from './names';

function setArtworksData(artworksData: ArtworksDTO[]) {
  return {
    type: NAMES.SET_ARTWORKS,
    artworksData,
  };
}

function setLoading(loading: boolean) {
  return {
    type: NAMES.SET_LOADING,
    loading,
  };
}

export const actions = {
  setArtworksData,
  setLoading,
};
