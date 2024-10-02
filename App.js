
import React from 'react';
import UserScreen from './components/userList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/details';


const MainApp = () => {
  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="UserScreen">
        <MainStack.Screen name="UserScreen" component={UserScreen} />
        <MainStack.Screen name="DetailsScreen" component={DetailsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
