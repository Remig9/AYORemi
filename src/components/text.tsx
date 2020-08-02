import React, {ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';
import {scaleFont} from '@burgeon8interactive/bi-react-library';
import Colors from '../helpers/colors';

interface TextProps {
  color: any;
  fontSize: number;
  numberOfLines: number;
  children: ReactNode;
  textAlign: 'left' | 'center' | 'right';
}

export const H1 = ({...props}: TextProps) => {
  return (
    <Text
      ellipsizeMode="tail"
      numberOfLines={props.numberOfLines}
      style={[
        styles.bold,
        {
          textAlign: props.textAlign,
          fontSize: scaleFont(props.fontSize || 25),
          color: props.color || Colors.whiteBase,
        },
      ]}>
      {props.children}
    </Text>
  );
};

export const H2 = ({...props}: TextProps) => {
  return (
    <Text
      ellipsizeMode="tail"
      numberOfLines={props.numberOfLines}
      style={[
        styles.semi,
        {
          textAlign: props.textAlign,
          fontSize: scaleFont(props.fontSize || 20),
          color: props.color || Colors.whiteBase,
        },
      ]}>
      {props.children}
    </Text>
  );
};

export const P = ({...props}: TextProps) => {
  return (
    <Text
      ellipsizeMode="tail"
      numberOfLines={props.numberOfLines}
      style={[
        styles.regular,
        {
          textAlign: props.textAlign,
          fontSize: scaleFont(props.fontSize || 15),
          color: props.color || Colors.whiteBase,
        },
      ]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'CircularStd-Black',
  },
  semi: {
    fontFamily: 'CircularStd-Medium',
  },
  regular: {
    fontFamily: 'CircularStd-Book',
  },
});
