import {StyleSheet} from 'react-native';
import {Spacing} from '../../theme/spacing';

export const cardStyles = StyleSheet.create({
  card: {
    borderRadius: Spacing.space8H,
    elevation: 4,
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 2, height: 4},
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: Spacing.space4H,
    marginHorizontal: Spacing.space16H,
    marginVertical: Spacing.space12V,
  },
  cardContent: {
    marginHorizontal: Spacing.space16H,
    marginTop: Spacing.space16V,
  },
  cardIcon: {
    alignSelf: 'flex-end',
    padding: Spacing.space8H,
  },
});
