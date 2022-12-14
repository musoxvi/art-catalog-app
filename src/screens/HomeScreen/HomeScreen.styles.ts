import {Dimensions, StyleSheet} from 'react-native';
import {normalizeFont, normalizeVertical} from '../../theme/normalize';
import {Spacing} from '../../theme/spacing';

const SCREEN_WIDTH = Dimensions.get('screen').width;
export const CARD_HEIGHT = SCREEN_WIDTH;
const IMAGE_HEIGHT = SCREEN_WIDTH / 4;

export const homeStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    maxHeight: CARD_HEIGHT,
  },
  footer: {
    height: CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
  image: {
    width: IMAGE_HEIGHT,
    borderRadius: Spacing.space4H,
    height: IMAGE_HEIGHT,
  },
  favoriteCard: {
    shadowOpacity: 0,
    borderWidth: 1,
    borderColor: '#049D9E',
    elevation: 0,
  },
  infoContainer: {
    paddingTop: Spacing.space16V,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalizeVertical(200),
    marginBottom: Spacing.space8V,
    justifyContent: 'center',
    backgroundColor: '#049D9E',
  },
  headerText: {
    fontSize: normalizeFont(24),
    color: '#ffffff',
  },
  headerIcon: {
    paddingLeft: Spacing.space24H,
    color: '#ffffff',
  },
  background: {
    backgroundColor: '#049D9E',
    position: 'absolute',
    top: -SCREEN_WIDTH,
    width: SCREEN_WIDTH + 100,
    height: SCREEN_WIDTH + 250,
    transform: [{rotate: '-90deg'}],
    borderTopLeftRadius: Math.round(SCREEN_WIDTH + SCREEN_WIDTH) / 4,
  },
});
