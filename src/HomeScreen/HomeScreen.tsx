import React, { useState } from "react";
import { View } from "react-native";
import { MaterialIcons  } from "@expo/vector-icons";
import {
  Item,
  HeaderButtons,
} from "react-navigation-header-buttons";
import { 
  Box,  
  Icon, 
  Image, 
  Input, 
  ZStack, 
  Button, 
  Text, 
  Divider, 
  Flex, 
  Modal, 
  FormControl, 
  InfoIcon,
  CloseIcon,
  CheckCircleIcon,
  Pressable
} from "native-base";
import { StyleSheet } from "react-native";

const img = require('../../assets/Vector.png');
const gif = require('../../assets/imgpsh_fullsize_anim.gif');

var styles = StyleSheet.create({
  box: {
    width: '100%'
  },
  buttonText: {
    width: '90%',
    height: 50,
    borderRadius: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
  },
  continueBox: {
    width: '80%',
    color: '#a3a3a3',
  },
  divider: {
    width: '40%'
  },
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
  passwordBox: {
    backgroundColor: '#E8EAED',
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 10
  }
});
  
const Home = (props: any) => {
  const [input, setInput] = useState("");
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [signOption, setSignOption] = useState<string>("");
  const [signModal, setSignModal] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  const openModal = (status: boolean, domain: string) => {
    if (domain === "apple") {
      setSignModal(true);
      setSignOption(domain)
    } else {
      setStep(1)
      setOpenAlertModal(status);
      setSignOption(domain);
    }
  }

  const goToNextScreen = () => {
    props.navigation.navigate("SignIn");
  }

  return (
    <>
      <View style={{ flex: 1, alignItems: "center"}}>
        <Box mt={150}>
          <ZStack mt="3" alignItems="center" justifyContent="center" p={0}>
            <Image alt="animate_sphere" size="80" source={gif} />
            <Image alt="effect" mt={30} source={require('../../assets/vector_frame.png')} height="50%" size={96} m={0} p={0} />
          </ZStack>
        </Box>
        <Box mt={130}>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input w={{
              base: "90%",
              md: "25%",
            }} 
            borderRadius={10}
            InputLeftElement={<Icon as={<MaterialIcons name="email" />} 
            size={5}
            ml="2"
            color="muted.400" />}
            placeholder="Enter your email"
            variant="filled"
          />
          </FormControl>
          <FormControl mt="1">
            <FormControl.Label>Password</FormControl.Label>
            <Input w={{
              base: "90%",
              md: "25%",
            }} 
            type="password"
            borderRadius={10}
            InputLeftElement={<Icon as={<MaterialIcons name="lock" />} 
            size={5}
            ml="2"
            color="muted.400" />}
            placeholder="Enter your password"
            variant="filled"
          />
          </FormControl>          
          <Text textAlign="right" mt="2">Forgot password?</Text>
        </Box>
        <Box mt={5} style={styles.box}>
          <Button id="sign-button" style={styles.buttonText} bgColor="danger.400" ml="5%" onPress={() => props.navigation.navigate("SignIn")}>Sign In</Button>
        </Box>
        <Box alignItems="center" style={styles.continueBox}>
          <Flex direction="row" h={58} p={4}>
            <Divider bg="muted.500" style={styles.divider} thickness="1" mx="2" mt="2.5" orientation="horizontal" />
            <Text color="muted.500">Or continue with</Text>
            <Divider bg="muted.500" style={styles.divider} width={150} thickness="1" mx="2" mt="2.5" orientation="horizontal" />
          </Flex>
        </Box>
        <Box>
          <Flex direction="row" alignItems="center" justifyContent="space-between">
            <Button variant="outline" width={105} height={50} borderRadius={10} borderColor="muted.400" borderStyle="solid" alignItems="center" justifyContent="center" onPress={() => openModal(true, "google")}>
              <Image alt="google" source={require('../../assets/google.png')} />
            </Button>
            <Button variant="outline" width={105} height={50} borderRadius={10} borderColor="muted.400" borderStyle="solid" alignItems="center" justifyContent="center" ml={5} onPress={() => openModal(true, "apple")}>
              <Image alt="apple" source={require('../../assets/apple.png')} />
            </Button>
            <Button variant="outline" width={105} height={50} borderRadius={10} borderColor="muted.400" borderStyle="solid" alignItems="center" justifyContent="center" ml={5} onPress={() => openModal(true, "facebook")}>
              <Image alt="facebook" source={require('../../assets/facebook.png')} />
            </Button>
          </Flex>
        </Box>
        <Box mt={5}>
          <Flex direction="row" alignItems="center" justifyContent="center">
            <Text>Do not have an account? </Text><Text color="#AE519D">Sign Up</Text>
          </Flex>
        </Box>
      </View>
      {signOption==="apple" && 
        <Modal isOpen={signModal} onClose={() => setSignModal(false)} size="full">
          <Modal.Content bgColor="muted.200" marginBottom="0" marginTop="auto" style={{width: "100%", height: '70%', marginBottom: 0, marginTop: 'auto'}}>
            <Modal.Header bgColor="muted.200">
              <Flex direction="row" alignItems="center" justifyContent="space-between">
                <Text fontSize={17} fontWeight={400} lineHeight={22} variant="ghost" >Sign In</Text>
                <Text color="info.400" fontSize={17} fontWeight={400} lineHeight={22} variant="ghost" onPress={() => setSignModal(false)}>Cancel</Text>
              </Flex>
            </Modal.Header>
            <Modal.Body>
              <Flex direction="row" alignItems="center" justifyContent="center">
                <Box style={styles.imageBox}>
                  <Image alt="mark" source={img} style={styles.image} />
                </Box>
              </Flex>
              <Flex direction="column" alignItems="center" justifyContent="center" mt={5} p={0}>
                <Text textAlign="center" fontSize={16} fontWeight={400} lineHeight={25.5}>Create an account for ADAMO your AI Assistant using your Apple ID</Text>
                <Text fontSize={15} fontWeight={400} lineHeight={25.5}>"kenzi.lawson@icloud.com"</Text>
                <Divider bg="muted.400" thickness="1" mx="3" mt="2.5" p={0} ml={-5} width="150%" orientation="horizontal" />
              </Flex>
              <Flex direction="row" alignItems="center" justifyContent="space-around" ml="9%" mt={2}>
                <Flex direction="row" alignItems="center">
                  <Text color="muted.500">NAME  </Text>
                  <Text>Kenzi Lawson</Text>
                </Flex>
                <CloseIcon ml="22%" />
              </Flex>
              <Divider bg="muted.400" thickness="1" mx="3" mt="2" ml="15%" orientation="horizontal" />
              <Flex direction="row" alignItems="center" justifyContent="space-around" ml="10%" mt={2}>
                <Flex direction="row" alignItems="center">
                  <Text color="muted.500">EMAIL  </Text>
                  <Flex direction="column">
                    <Text>Share My Email</Text>
                    <Text>kenzi.lawson@icloud.com</Text>
                  </Flex>
                </Flex>
                <CheckCircleIcon />
              </Flex>
              <Divider bg="muted.400" thickness="1" mx="3" mt="2.5" ml="15%" orientation="horizontal" />
              <Flex direction="row" alignItems="center" justifyContent="space-around" ml="10%" mt={2}>
                <Flex direction="row" alignItems="center">
                  <Text color="muted.500">EMAIL  </Text>
                  <Flex direction="column">
                    <Text>Hide My Email</Text>
                    <Text>Forward to:</Text>
                    <Text>kenzi.lawson@icloud.com</Text>
                  </Flex>
                </Flex>
                <CheckCircleIcon />
              </Flex>
              <Divider bg="muted.400" thickness="1" mx="3" mt="2" p={0} ml={-5} width="150%" orientation="horizontal" />
              <Button bgColor="info.600" size="sm" width="32%" ml="34%" mt={5} borderRadius={10}>
                Continue
              </Button>
              <Text textAlign="center" color="info.500" mt={2} fontSize={13} fontWeight={400}>Use a different Apple ID</Text>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      }
      {
        (signOption !== "apple" && step === 1) &&
          <Modal isOpen={openAlertModal} onClose={() => openModal(!openAlertModal, signOption)} borderRadius="20">
            <Modal.Content>
              <Modal.Body>
                <Flex direction="column" alignItems="center" justifyContent="center">
                  <Text fontSize={17} fontWeight={600} style={{width: '80%', fontWeight: 'bold', textAlign: 'center'}}>
                    "Abamo" Wants to Use "{signOption}" to Sign In
                  </Text>
                  <Text fontSize={13} fontWeight={400} style={{textAlign: 'center', width: '95%'}}>
                    This allows the app and website to share information about you
                  </Text>
                </Flex>
              </Modal.Body>
              <Modal.Footer style={{height: 50, padding: 0}}>
                <Box style={{width: '100%', padding: 0, marginTop: -5}}>
                  <Flex direction="row" alignItems="center" justifyContent="space-around">
                    <Text color="info.400" fontSize={17} fontWeight={400} lineHeight={22} variant="ghost" onPress={() => openModal(!openAlertModal, signOption)}>Cancel</Text>
                    <Text color="info.500" fontSize={17} fontWeight={600} lineHeight={22} variant="ghost" onPress={() => {setStep(2); setSignModal(true)}}>Continue</Text>
                  </Flex>
                </Box>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
      }
      {
        (signOption === "google" && step === 2) &&
          <Modal isOpen={signModal} onClose={() => setSignModal(false)} size="lg" safeAreaTop={true}>
            <Modal.Content marginBottom="0" marginTop="auto" size="lg" style={{width: "100%", height: '110%'}}>
              <Modal.Header>
                <Flex direction="row" alignItems="center" justifyContent="flex-start">
                  <Text color="info.400" fontSize={17} fontWeight={400} lineHeight={22} variant="ghost" onPress={() => setSignModal(false)}>Cancel</Text>
                  <Text fontSize={17} fontWeight={400} lineHeight={22} variant="ghost" ml="15%" >Sign In With Google</Text>
                </Flex>
              </Modal.Header>
              <Modal.Body>
                <Flex direction="column" alignItems="center" justifyContent="center">
                  <Image alt="mark" source={require('../../assets/Google_svg.png')} />
                  <Text textAlign="center" color="muted.400" fontSize={18} fontWeight={400} lineHeight={28} mt={5}>Sign in with your google account</Text>
                </Flex>
                <Box style={styles.passwordBox}>
                  <Flex direction="column" alignItems="center" justifyContent="center" mt={5} p={0}>
                    <Image alt="user_circle" source={require('../../assets/user_circle.png')} />
                    <Text color="muted.400" fontSize={15}>kenzi.lawson@gmail.com</Text>
                    <Input w={{
                        base: "90%",
                        md: "25%"
                      }} 
                      type={show ? "text" : "password"} 
                      InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                          <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>
                      } 
                      placeholder="Password" 
                      bgColor="white"
                      mt={5} />
                    <Button id="sign-button" borderRadius={5} width="90%" ml={0} mt={5} bgColor="blue.600">Sign In</Button>
                  </Flex>
                  <Text color="blue.500" textAlign="right" fontSize={15} mr={5} mt={3}>Forgot password?</Text>
                </Box>
                <Text color="blue.500" textAlign="center" mt={10}>Sign in with a different account</Text>
                <Text color="muted.400" textAlign="center" mt={30} fontSize={16} fontWeight={500} lineHeight={25.5}>One Google Account for everything Google</Text>
                <Flex direction="row" alignItems="center" justifyContent="center" mt={5}>
                  <Image alt="google" source={require('../../assets/google.png')} />
                  <Image alt="gmail" source={require('../../assets/gmail_icon.png')} ml={3}/>
                  <Image alt="google_map" source={require('../../assets/google_map.png')} ml={3}/>
                  <Image alt="youtube" source={require('../../assets/youtube_icon.png')} ml={3}/>
                  <Image alt="google_drive" source={require('../../assets/google_drive.png')} ml={3}/>
                  <Image alt="google_photo" source={require('../../assets/google_photo.png')} ml={3}/>
                  <Image alt="google_playstore" source={require('../../assets/google_playstore.png')} ml={3}/>
                  <Image alt="google_account" source={require('../../assets/google_account.png')} ml={3}/>
                </Flex>
              </Modal.Body>
            </Modal.Content>
          </Modal>
      }
      {
        (signOption === "facebook" && step === 2) &&
          <Modal isOpen={signModal} onClose={() => setSignModal(false)} size="lg" safeAreaTop={true}>
            <Modal.Content marginBottom="0" marginTop="auto" size="lg" style={{width: "100%", height: '110%'}}>
              <Modal.Header>
                <Flex direction="row" alignItems="center" justifyContent="flex-start">
                  <Text color="info.400" fontSize={17} fontWeight={400} lineHeight={22} variant="ghost" onPress={() => setSignModal(false)}>Cancel</Text>
                  <Text fontSize={17} fontWeight={400} lineHeight={22} variant="ghost" ml="20%" >Facebook.com</Text>
                </Flex>
              </Modal.Header>
              <Modal.Body>
                <Box width="110%" height={60} bgColor="blue.500" ml={-5} pt={2}>
                  <Flex direction="row" alignItems="center" justifyContent="center">
                    <Image alt="mark" source={require('../../assets/facebook_icon.png')} />
                    <Text color="white" fontSize={18} fontWeight={400} lineHeight={28} ml={3}>Login with Facebook</Text>
                  </Flex>
                </Box>
                <Flex direction="column" alignItems="center" justifyContent="center">
                  <Image alt="user_picture" source={require('../../assets/user_picture.png')} mt={16} />
                  <Text mt={5} fontSize={20} fontWeight={400} lineHeight={28}>Adamo will receive:</Text>
                  <Text width="80%" textAlign="center" fontSize={20} fontWeight={400} lineHeight={28}>your name and profile picture and email address</Text>
                </Flex>
                <Flex direction="row" alignItems="center" justifyContent="center" mt={3}>
                  <Image alt="edit_icon" source={require('../../assets/edit_rectangle.png')} />
                  <Text fontSize={20} ml={2} color="#1877F2">Edit</Text>
                </Flex>
                <Flex direction="row" alignItems="center" justifyContent="center" mt={20}>
                  <Image alt="lock_icon" source={require('../../assets/lock.png')} mr={3} />
                  <Text textAlign="center" color="light.500" fontSize={17} fontWeight={400} lineHeight={25.5}>
                      This doesn't let the app post to Facebook
                  </Text>
                </Flex>
                <Flex direction="column" alignItems="center" justifyContent="center" mt={5}>
                  <Button bgColor="darkBlue.500">Continue as Kenzi</Button>
                  <Text mt={5} variant="ghost" fontSize={16} fontWeight={700} lineHeight={24} color="darkBlue.400" onPress={() => setSignModal(false)} >Cancel</Text>
                </Flex>
              </Modal.Body>
            </Modal.Content>
          </Modal>
      }
    </>
  );
};

const HeaderButtonComponent = (props: any) => (
  <Image alt="header_mark" source={img} {...props} ml={3} />
);

Home.navigationOptions = (navData: any) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent} >
        <Item
          title="Setting"
          iconName="ios-settings-outline"
        />
      </HeaderButtons>
    ),
    
  };
};
  
export default Home;