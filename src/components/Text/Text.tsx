import React, {FC} from 'react';
import {textStyles} from './Text.style';
import {Text as NativeText, TextProps, TextStyle} from 'react-native';

type CustomTextProps = {
  textType?: 'regular' | 'bold' | 'light';
  style?: TextStyle | TextStyle[];
} & TextProps;

export const Text: FC<CustomTextProps> = ({
  children,
  textType = 'regular',
  style,
  ...rest
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <NativeText style={[textStyles[textType], {...passedStyles}]} {...rest}>
      {children}
    </NativeText>
  );
};
