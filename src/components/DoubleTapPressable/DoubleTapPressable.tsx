/* eslint-disable react-native/no-inline-styles */
import React, {FC, ReactNode, useRef, useState} from 'react';
import {Platform, StyleProp, View, ViewStyle} from 'react-native';
import {
  LongPressGestureHandlerStateChangeEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';

const LONG_PRESS_DELAY = 500; // Default value for the original Pressable component

type IDoubleTapPressableProps = {
  children: ReactNode;
  onDoubleTap: () => void;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const DoubleTapPressable: FC<IDoubleTapPressableProps> = ({
  onDoubleTap,
  onPress,
  style,
  children,
}) => {
  const doubleTapRef = useRef<TapGestureHandler>(null);
  const [pressed, setPressed] = useState(false);

  const handleEvent = (
    event:
      | TapGestureHandlerStateChangeEvent
      | LongPressGestureHandlerStateChangeEvent,
    handlePressEvent: () => void,
  ) => {
    setPressed(event.nativeEvent.state === State.BEGAN);
    handlePressEvent();
  };

  const handleSingleTapEvent = (event: TapGestureHandlerStateChangeEvent) => {
    handleEvent(event, () => {
      // Even on after a failed state, an active state can run without
      // a began state before it. This check prevents that behavior
      if (Platform.OS === 'ios' && !pressed) {
        return;
      }
      event.nativeEvent.state === State.ACTIVE && onPress && onPress();
    });
  };

  const handleDoubleTapEvent = (event: TapGestureHandlerStateChangeEvent) => {
    handleEvent(
      event,
      () => event.nativeEvent.state === State.ACTIVE && onDoubleTap(),
    );
  };

  return (
    <TapGestureHandler
      onHandlerStateChange={handleSingleTapEvent}
      waitFor={doubleTapRef}>
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={handleDoubleTapEvent}
        numberOfTaps={2}
        maxDurationMs={LONG_PRESS_DELAY}>
        <View style={[style, pressed && {opacity: 0.5}]}>{children}</View>
      </TapGestureHandler>
    </TapGestureHandler>
  );
};
