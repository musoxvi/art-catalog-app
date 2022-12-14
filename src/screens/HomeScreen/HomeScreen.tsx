import React from 'react';
import {StatusBar, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {useArtworks} from '../../hooks/useArtworks';
import {useHomeScreen} from './HomeScreen.hook';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../theme/globalStyles';
import {homeStyles} from './HomeScreen.styles';

export const HomeScreen = () => {
  const {artworksData, fetchArtworks} = useArtworks();
  const {renderItem, renderFooter, renderHeader} = useHomeScreen();

  return (
    <SafeAreaView style={globalStyles.flex1}>
      <StatusBar animated backgroundColor="#049D9E" />
      <View style={homeStyles.background} />
      <FlashList
        data={artworksData}
        renderItem={renderItem}
        keyExtractor={(item, idx) => (item?.imageId ? item.imageId : `${idx}`)}
        onEndReachedThreshold={0.1}
        onEndReached={fetchArtworks}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        estimatedItemSize={216}
        extraData={renderItem}
      />
    </SafeAreaView>
  );
};
