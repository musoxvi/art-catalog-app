import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iPhone 11 scale
const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

const normalize = (size: number, based: 'width' | 'height' = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

//for width  pixel
const normalizeHorizontal = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const normalizeVertical = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
const normalizeFont = (size: number) => {
  return normalizeVertical(size) + (Platform.OS === 'android' ? 2 : 0);
};

export {normalizeHorizontal, normalizeVertical, normalizeFont};
