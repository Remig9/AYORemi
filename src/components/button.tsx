import React, {ReactNode} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  scaleFont,
  Page,
  TextWrap,
  TouchWrap,
  Container,
  ImageWrap,
  InputWrap,
  ScrollArea,
} from '@burgeon8interactive/bi-react-library';
import Colors from '../helpers/colors';

interface ButtonProps {
  text: string;
}

export const NormalButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        direction="row"
        marginTop={3}
        horizontalAlignment="center"
        width={90}
        height={8}
        borderRadius={12}
        verticalAlignment="center"
        backgroundColor="#009FFF">
        <TextWrap color="#FFFFFF" fontSize={20} textDecorationLine="underline">
          {props.text}
        </TextWrap>
      </Container>
    </TouchableOpacity>
  );
};

export const AnkaraButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <ImageWrap
        source={require('../../assets/img/ankara.png')}
        backgroundColor="red"
        marginTop={3}
        horizontalAlignment="center"
        width={90}
        height={8}
        borderRadius={12}
        fit="cover"
        verticalAlignment="center">
        <TextWrap
          color="#FFFFFF"
          fontSize={20}
          textDecorationLine="underline"
          textAlign="center">
          {props.text}
        </TextWrap>
      </ImageWrap>
    </TouchableOpacity>
  );
};

export const NoColorButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        marginTop={3}
        horizontalAlignment="center"
        width={30}
        height={5}
        borderRadius={5}
        borderWidth={1}
        borderColor="#FFFFFF"
        verticalAlignment="center">
        <TextWrap color="#FFFFFF" fontSize={10}>
          {props.text}
        </TextWrap>
      </Container>
    </TouchableOpacity>
  );
};

export const FollowingButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        backgroundColor="(95.71deg, rgba(0, 213, 255, 0.94) 14.03%, rgba(0, 159, 255, 0.7708) 96.53%)"
        direction="row"
        marginTop={3}
        horizontalAlignment="center"
        width={35}
        height={6}
        borderRadius={5}
        elevation={5}
        verticalAlignment="center">
        <Container marginLeft={-5}>
          <ImageWrap
            source={require('../../assets/img/plus.png')}
            width={4}
            height={2}
          />
        </Container>
        <Container marginLeft={2}>
          <TextWrap color="#FFFFFF" fontSize={10}>
            {props.text}
          </TextWrap>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export const AddButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        backgroundColor="(95.71deg, rgba(0, 213, 255, 0.94) 14.03%, rgba(0, 159, 255, 0.7708) 96.53%)"
        direction="row"
        marginTop={3}
        horizontalAlignment="center"
        width={16}
        height={8}
        borderRadius={50}
        elevation={5}
        verticalAlignment="center">
        <ImageWrap
          source={require('../../assets/img/plus.png')}
          width={4}
          height={2}
        />
      </Container>
    </TouchableOpacity>
  );
};

export const LiveButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        backgroundColor="(95.71deg, rgba(0, 213, 255, 0.94) 14.03%, rgba(0, 159, 255, 0.7708) 96.53%)"
        direction="row"
        marginTop={3}
        horizontalAlignment="center"
        width={18}
        height={4}
        borderRadius={4}
        elevation={5}
        verticalAlignment="center">
        <TextWrap color="#FFFFFF" fontSize={10}>
          {props.text}
        </TextWrap>
        <Container marginLeft={1}>
          <ImageWrap
            source={require('../../assets/img/plus.png')}
            width={3}
            height={1.5}
          />
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export const ContinueButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        direction="row"
        marginTop={3}
        horizontalAlignment="center"
        width={48}
        height={8}
        verticalAlignment="center">
        <TextWrap color="#FFFFFF" fontSize={20}>
          {props.text}
        </TextWrap>
        <Container marginLeft={3}>
          <ImageWrap
            source={require('../../assets/img/Arrow.png')}
            width={6}
            height={3}
            fit="contain"
          />
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export const FollowButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        direction="row"
        marginTop={3}
        horizontalAlignment="center"
        width={35}
        height={6}
        borderWidth={1}
        borderColor="(95.71deg, rgba(0, 213, 255, 0.94) 14.03%, rgba(0, 159, 255, 0.7708) 96.53%)"
        borderRadius={5}
        verticalAlignment="center">
        <Container marginLeft={-5}>
          <ImageWrap
            source={require('../../assets/img/plusb.png')}
            width={4}
            height={2}
          />
        </Container>
        <Container marginLeft={2}>
          <TextWrap
            color="(95.71deg, rgba(0, 213, 255, 0.94) 14.03%, rgba(0, 159, 255, 0.7708) 96.53%)"
            fontSize={10}>
            {props.text}
          </TextWrap>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export const UserButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        direction="row"
        marginTop={3}
        horizontalAlignment="center"
        width={35}
        height={4}
        borderWidth={2}
        borderColor="(95.71deg, rgba(0, 213, 255, 0.94) 14.03%, rgba(0, 159, 255, 0.7708) 96.53%)"
        borderRadius={15}
        verticalAlignment="center">
        <Container marginLeft={-5}>
          <ImageWrap
            source={require('../../assets/img/eye.png')}
            width={4}
            height={2}
          />
        </Container>
        <Container marginLeft={2}>
          <TextWrap
            color="(95.71deg, rgba(0, 213, 255, 0.94) 14.03%, rgba(0, 159, 255, 0.7708) 96.53%)"
            fontSize={10}>
            {props.text}
          </TextWrap>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export const ControlButton = ({...props}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container
        marginTop={3}
        horizontalAlignment="center"
        width={16}
        height={8}
        borderRadius={50}
        backgroundColor="#000000"
        verticalAlignment="center">
        <Container>
          <ImageWrap source={props.src} width={5} height={5} fit="contain" />
        </Container>
      </Container>
    </TouchableOpacity>
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
