import {ArtworksDTO} from '../../models/models';

export type ParamList = {
  DetailsScreen: {
    artwork: ArtworksDTO;
    isFavorite: boolean;
  };
};

export type TextItemProps = {
  title: string;
  description: string;
};
