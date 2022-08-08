import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";

import ButtonUi from "../../components/ui/ButtonsUi";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../../components/ui/IconButton";
import ExterAuthIcons from "../../components/ExternelAuth";
import { Colors } from "../../constants/Colors";
import { fonts } from "../../constants/fonts";
import Footer from "../../components/footer";
import Button1 from "../../components/ui/Button-1";
import Button2 from "../../components/ui/Button-2";

const HomePage = ({ navigation }: { navigation: any }) => {
  const LoginNavigation = () => {
    navigation.navigate("LogIn");
  };
  const SignUpNavigation = () => [navigation.navigate("SignUp")];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoView}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../assets/undraw_speed_test_re_pe1f.png")}
          />
        </View>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.Buttons}>
          <Button1
            backgroundColor="#4DAE60"
            onPress={LoginNavigation}
            fontSize={16}
            marginTop={10}>
            Continue with Email
          </Button1>
          <Button2
            backgroundColor="#4DAE60"
            onPress={() => navigation.navigate("PhoneAuth")}
            fontSize={16}
            marginTop={20}
            iconName="phone-alt"
            iconColor="white">
            Continue with phone
          </Button2>
          <Button2
            backgroundColor="black"
            fontSize={16}
            marginTop={20}
            iconName="apple"
            iconColor="white">
            Continue with Apple
          </Button2>

          <Button2
            backgroundColor="#5583EC"
            fontSize={16}
            marginTop={20}
            iconName="google"
            iconColor="white">
            Continue with Google
          </Button2>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}>
          <Pressable
            style={{ marginVertical: 10 }}
            onPress={SignUpNavigation}
            android_ripple={{ color: "#fff" }}>
            <Text style={{ fontFamily: fonts.bold }}>
              Don't have an account ?{" "}
              <Text style={{ color: "#4DAE60" }}>Sign Up</Text>
            </Text>
          </Pressable>
        </View>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },

  header: {
    height: "45%",
    justifyContent: "center",
  },

  title: {
    fontSize: 48,
    color: "black",
    fontFamily: fonts.main,
    textAlign: "center",
  },
  logoView: {
    flex: 7 / 12,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  subTitle: {
    color: "black",
  },
  authContainer: {
    width: "100%",
  },

  Buttons: {},

  comment: {
    fontFamily: fonts.main,
    marginTop: "5%",
    color: "black",
    textAlign: "center",
  },
  authLogo: {
    marginBottom: "10%",
  },
});

export default HomePage;
