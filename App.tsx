import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TextTestView from './examples/textView';
import ButtonTestView from './examples/buttonView';
import {MainTabMenu} from './src/components/menu';

const TestTab = createBottomTabNavigator();
const TestTabScreens = () => (
  <TestTab.Navigator>
    <TestTab.Screen component={TextTestView} name="Text" />
    <TestTab.Screen component={ButtonTestView} name="Button" />
  </TestTab.Navigator>
);

const MainTab = createBottomTabNavigator();
const MainTabScreen = () => (
  <MainTab.Navigator tabBar={(props) => <MainTabMenu {...props} />}>
    <MainTab.Screen component={TextTestView} name="Home" />
    <MainTab.Screen component={TextTestView} name="Explore" />
    <MainTab.Screen component={TextTestView} name="My Library" />
    <MainTab.Screen component={TextTestView} name="Profile" />
  </MainTab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <TestTabScreens />
      {/* <MainTabScreen /> */}
    </NavigationContainer>
  );
};

export default App;
