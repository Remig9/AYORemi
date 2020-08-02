import React from 'react';
import {H1, H2, P} from '../src/components/text';
import {Container, Page} from '@burgeon8interactive/bi-react-library';
import {StatusBar} from 'react-native';

const TextTestView = (props) => {
  return (
    <Page>
      <Container
        flex={1}
        horizontalAlignment="center"
        verticalAlignment="center"
        backgroundColor="#000">
        <H1>Hello World</H1>
        <H2>Hello World</H2>
        <P>Hello World</P>
      </Container>
    </Page>
  );
};

export default TextTestView;
