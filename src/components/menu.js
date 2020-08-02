import React from 'react';
import {
  Container,
  TouchWrap,
  scaleFont,
  SizedBox,
} from '@burgeon8interactive/bi-react-library';
import Colors from '../helpers/colors';
import {P} from './text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native';

const routeIcon = ['home', 'explore', 'library-music', 'account-circle'];

export const MainTabMenu = (props) => {
  const [route] = React.useState(props.state.routes);

  return (
    <>
      <Container
        elevation={5}
        direction="row"
        backgroundColor={Colors.blackBase}
        horizontalAlignment="space-evenly"
        style={{transform: [{rotateZ: '0deg'}]}}>
        {route.map((el, i) => (
          <TouchWrap
            widthPercent="20%"
            key={i}
            onPress={() => {
              props.navigation.navigate(el.name);
            }}>
            <Container horizontalAlignment="center" paddingVertical={1}>
              <MaterialIcons
                name={routeIcon[i]}
                size={scaleFont(28)}
                color={
                  i === props.state.index
                    ? Colors.whiteBase90
                    : Colors.whiteBase30
                }
              />
              <SizedBox height={0.2} />
              <P
                fontSize={6}
                color={
                  i === props.state.index
                    ? Colors.whiteBase90
                    : Colors.whiteBase30
                }>
                {el.name}
              </P>
            </Container>
          </TouchWrap>
        ))}
      </Container>
      <SafeAreaView />
    </>
  );
};
