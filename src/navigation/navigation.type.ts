import {StackNavigationProp} from '@react-navigation/stack';

export type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? {screen: K; params?: ParamList[K]; initial?: boolean}
    : {screen: K; params: ParamList[K]; initial?: boolean};
}[keyof ParamList];

export type ArtworksStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {
    artwork: any;
    isFavorite: boolean;
  };
};

// Navigation Props for Art Catalog APP
export type ArtworksStackNavigationProp<
  Route extends keyof ArtworksStackParamList,
> = StackNavigationProp<ArtworksStackParamList, Route>;
