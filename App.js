import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import HomeScreen from "./src/HomeScreen/HomeScreen";
import SignInScreen from "./src/HomeScreen/SignInScreen";
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
  }
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