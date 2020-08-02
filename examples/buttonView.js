import React from 'react';
import {H1, H2, P} from '../src/components/text';
import {
  NormalButton,
  AnkaraButton,
  NoColorButton,
  FollowingButton,
  ControlButton,
  FollowButton,
  AddButton,
  LiveButton,
  ContinueButton,
  UserButton,
} from '../src/components/button';
import {Container, Page} from '@burgeon8interactive/bi-react-library';
import {StatusBar} from 'react-native';

const ButtonTestView = (props) => {
  return (
    <Page>
      <Container
        flex={1}
        horizontalAlignment="center"
        verticalAlignment="center"
        backgroundColor="pink">
        <NormalButton text="SignUp" />
        <AnkaraButton text="SignUp" />
        <NoColorButton text="SignUp" />
        <FollowingButton text="Following" />
        <FollowButton text="Follow" />
        <LiveButton text="Live" />
        <AddButton />
        <UserButton text="20K Users" />
        <ContinueButton text="Continue" />
        <ControlButton src={require('../assets/img/play.png')} />
      </Container>
    </Page>
  );
};

export default ButtonTestView;
