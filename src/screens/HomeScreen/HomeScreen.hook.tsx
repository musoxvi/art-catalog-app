import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import {Card} from '../../components/Card';
import {DoubleTapPressable} from '../../components/DoubleTapPressable/DoubleTapPressable';
import {Image} from '../../components/Image';
import {Text} from '../../components/Text';
import {homeStyles} from './HomeScreen.styles';
import {Spacing} from '../../theme/spacing';
import {ArtworksStackNavigationProp} from '../../navigation/navigation.type';
import {ArtworksDTO} from '../../models/models';

export const useHomeScreen = () => {
  //const navigation = useNavigation();

  const navigation = useNavigation<ArtworksStackNavigationProp<'HomeScreen'>>();
  const [favorites, setFavorites] = useState<string[]>([]);

  /**
   * storeFavoriteData
   * This method saves the data in local storage
   * @param ids {string[]}
   */
  const storeFavoriteData = async (ids: string[]) => {
    try {
      await AsyncStorage.setItem('@storage_favorite', JSON.stringify(ids));
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * storeFavoriteData
   * This method gets the bookmark ids in local storage
   */
  const getStoreFavoriteData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_favorite');
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * toggleFavorite
   * This method handles status for items selected as favorites.
   * @param id {string}
   */
  const toggleFavorite = useCallback(
    (id: string) => {
      if (!favorites.includes(id)) {
        return setFavorites(prevFavorites => {
          const newFavoriteIds = prevFavorites.concat(id);
          storeFavoriteData(newFavoriteIds);
          return newFavoriteIds;
        });
      } else {
        let index = favorites.indexOf(id);
        let temp = [
          ...favorites.slice(0, index),
          ...favorites.slice(index + 1),
        ];
        storeFavoriteData(temp);
        setFavorites(temp);
      }
    },
    [favorites],
  );

  const renderHeader = useCallback(() => {
    return (
      <View style={homeStyles.header}>
        <View>
          <Text textType="bold" style={homeStyles.headerText}>
            ART
          </Text>
          <Text textType="bold" style={homeStyles.headerText}>
            INSTITVTE
          </Text>
          <Text textType="bold" style={homeStyles.headerText}>
            CHICAGO
          </Text>
        </View>
        <Icon
          style={homeStyles.headerIcon}
          name="museum"
          size={Spacing.space44H}
        />
      </View>
    );
  }, []);

  const renderFooter = useCallback(() => {
    return (
      <View style={homeStyles.footer}>
        <ActivityIndicator color={homeStyles.footer.color} />
      </View>
    );
  }, []);

  const renderItem = useCallback(
    ({item}: {item: ArtworksDTO}) => {
      const uri = `https://www.artic.edu/iiif/2/${item.imageId}/full/400,/0/default.jpg`;
      const isFavorite = favorites.includes(`${item.id}`);
      const iconName = isFavorite ? 'favorite' : 'favorite-border';

      const onDoubleTap = () => toggleFavorite(`${item.id}`);
      const onPress = () =>
        navigation.navigate('DetailsScreen', {artwork: item, isFavorite});

      return item?.imageId ? (
        <Card
          iconName={iconName}
          iconButtonCallback={onDoubleTap}
          styles={isFavorite ? homeStyles.favoriteCard : undefined}>
          <DoubleTapPressable
            style={homeStyles.container}
            onDoubleTap={onDoubleTap}
            onPress={onPress}>
            <Image
              style={homeStyles.image}
              source={{
                uri,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={homeStyles.infoContainer}>
              <Text textType="bold">Title: {item.title}</Text>
              <Text>Artist Name: {item.artistTitle}</Text>
            </View>
          </DoubleTapPressable>
        </Card>
      ) : (
        <View />
      );
    },
    [favorites, navigation, toggleFavorite],
  );

  useEffect(() => {
    // This method calls storage when the component is mounted.
    getStoreFavoriteData();
  }, []);

  return {renderItem, renderFooter, renderHeader};
};
