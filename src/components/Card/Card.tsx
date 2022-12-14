import React, {FC, ReactNode} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {cardStyles} from './Card.style';

type Props = {
  iconName?: string;
  children: ReactNode;
  iconButtonCallback?: () => void;
  styles?: ViewStyle | ViewStyle[];
};

export const Card: FC<Props> = ({
  children,
  iconButtonCallback,
  iconName,
  styles,
}) => {
  return (
    <View style={[cardStyles.card, styles]}>
      <View style={cardStyles.cardContent}>{children}</View>
      {iconName && (
        <Pressable onPress={iconButtonCallback} style={cardStyles.cardIcon}>
          <Icon name={iconName} size={30} color="#d50000" />
        </Pressable>
      )}
    </View>
  );
};
