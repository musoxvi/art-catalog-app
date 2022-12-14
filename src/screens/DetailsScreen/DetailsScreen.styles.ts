import {Dimensions, StyleSheet} from 'react-native';
import {
  normalizeFont,
  normalizeHorizontal,
  normalizeVertical,
} from '../../theme/normalize';
import {Spacing} from '../../theme/spacing';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const CARD_HEIGHT = SCREEN_WIDTH / 1.5;

export const detailsStyles = StyleSheet.create({
  footer: {
    height: CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
  image: {
    width: '100%',
    borderRadius: Spacing.space4H,
    height: CARD_HEIGHT,
  },
  text: {
    color: '#263238',
    fontSize: normalizeFont(14),
  },
  textItemWrapper: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.space20H,
    paddingVertical: Spacing.space12V,
  },
  textHeader: {
    fontSize: normalizeFont(16),
    color: '#049D9E',
    maxWidth: normalizeHorizontal(200),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Spacing.space16H,
    height: normalizeVertical(40),
    marginBottom: Spacing.space32V,
    alignItems: 'center',
  },
});
