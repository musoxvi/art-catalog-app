import React, {FC, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {imageStyles} from './Image.style';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
const DURATION = 1600;

export const Image: FC<FastImageProps> = ({onLoad, source, style, ...rest}) => {
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(true);

  const AnimatedFastImage = Reanimated.createAnimatedComponent(
    FastImage as FC<FastImageProps>,
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(1, {duration: DURATION}),
    };
  });

  return (
    <View>
      <AnimatedFastImage
        style={[style, animatedStyle]}
        onError={() => setImageError(true)}
        onLoad={e => {
          onLoad?.(e);
          setLoading(true);
        }}
        source={
          imageError
            ? source
            : {
                uri: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
              }
        }
        {...rest}
      />
      {!loading && (
        <View style={[StyleSheet.absoluteFill, imageStyles.spinner]}>
          <ActivityIndicator color="#000" />
        </View>
      )}
    </View>
  );
};
