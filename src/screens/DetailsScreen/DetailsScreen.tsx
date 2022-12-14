import React, {FC} from 'react';
import {Pressable, SafeAreaView, StatusBar, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from '../../components/Image';
import {Text} from '../../components/Text';
import {globalStyles} from '../../theme/globalStyles';
import {detailsStyles} from './DetailsScreen.styles';
import FastImage from 'react-native-fast-image';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ArtworksStackNavigationProp} from '../../navigation/navigation.type';
import {ParamList, TextItemProps} from './DetailsScreen.types';

const TextItem: FC<TextItemProps> = ({title, description}) => (
  <View style={detailsStyles.textItemWrapper}>
    <Text style={detailsStyles.text}>
      <Text textType="bold" style={detailsStyles.text}>
        {title}
      </Text>{' '}
      {description}
    </Text>
  </View>
);

export const DetailsScreen = () => {
  const navigation =
    useNavigation<ArtworksStackNavigationProp<'DetailsScreen'>>();
  const route = useRoute<RouteProp<ParamList, 'DetailsScreen'>>();
  const {artwork, isFavorite} = route?.params || {};
  const iconFavorite = isFavorite ? 'favorite' : 'favorite-border';
  const uri = `https://www.artic.edu/iiif/2/${artwork?.imageId}/full/1686,/0/default.jpg`;

  return (
    <SafeAreaView style={globalStyles.flex1}>
      <StatusBar animated backgroundColor="#FFFFFF" />
      <View style={detailsStyles.header}>
        <Pressable onPress={navigation.goBack}>
          <Icon name="arrow-back-ios" size={24} />
        </Pressable>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={detailsStyles.textHeader}>
          {artwork?.title}
        </Text>
        <Icon name={iconFavorite} size={24} color="#d50000" />
      </View>
      <Image
        style={detailsStyles.image}
        source={{
          uri,
          priority: FastImage.priority.low,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <TextItem title="Artist:" description={artwork?.artistTitle} />
      <TextItem
        title="Country of Origin:"
        description={artwork?.placeOfOrigin}
      />
      <TextItem title="Category:" description={artwork?.categoryTitles[0]} />
      <TextItem title="Medium:" description={artwork?.mediumDisplay} />
    </SafeAreaView>
  );
};
