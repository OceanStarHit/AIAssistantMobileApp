import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Box, Flex, Image, Text } from "native-base";
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  imageBox: {
    backgroundColor: 'white',
    width: 80,
    height: 80, 
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 50,
    height: 40
  },
});

const SignIn = () => {
  return (
    <View style={{ flex: 1 }}>
      <Flex direction="row" alignItems="center" justifyContent="center">
        <Box style={styles.imageBox}>
          <Image alt="mark" source={require('../../assets/Vector.png')} style={styles.image} />
        </Box>
      </Flex>
      <Flex direction="column" alignItems="center" justifyContent="left">
        <Text textAlign="left">Tell us</Text>
        <Text>about you</Text>
        <Text>You'll be able to create a personalized account and access exclusive features.</Text>
      </Flex>
    </View>
  );
};
  
SignIn.navigationOptions = (navData: any) => {
  return {
    headerTitle: navData.navigation.getParam("username"),
  };
};

export default SignIn;