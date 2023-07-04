import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import HomeScreen from "./src/pages/HomeScreen";
import SignInScreen from './src/pages/SignInScreen';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignIn: SignInScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: '',
      headerStyle: {
        backgroundColor: 'rgba(254, 252, 254, 1)'
      },
      cardStyle: {
        backgroundColor: 'rgba(254, 252, 254, 1)'
      }
    }
  },
  {initialRouteName: "Home"}
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigator>
        <HomeScreen />
      </Navigator>
    </NativeBaseProvider>
  )
}
