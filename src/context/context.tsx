import React, {createContext, useReducer, FC, ReactNode} from 'react';
import {actions} from './actions';
import {ArtworksDTO, ContextProps} from '../models/models';
import {initialState, reducer} from './reducers';

export const Context = createContext({} as ContextProps);

type Props = {children: ReactNode};

export const Provider: FC<Props> = ({children}) => {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = {
    setArtworksData(artworksData: ArtworksDTO[]) {
      setState(actions.setArtworksData(artworksData));
    },
    setLoading(_loading: boolean) {
      setState(actions.setLoading(_loading));
    },
  };

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};
