import {State} from '../models/models';
import {NAMES} from './names';

export const initialState: State = {
  loading: true,
  artworksData: [],
};

const {SET_ARTWORKS, SET_LOADING} = NAMES;

export function reducer(state: State, action: any): State {
  const {type, artworksData, loading} = action || {};

  switch (type) {
    case SET_ARTWORKS:
      return {
        ...state,
        artworksData,
      };
    case SET_LOADING:
      return {
        ...state,
        loading,
      };

    default: {
      // helps us avoid typos!
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
