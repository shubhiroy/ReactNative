import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/rn-social-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        labelValue={email}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        labelValue={password}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormInput
        labelValue={confirmPassword}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={(userConfirmPassword) =>
          setConfirmPassword(userConfirmPassword)
        }
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => alert("Sign Up Clicked")}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms!')}>
          <Text style={{...styles.color_textPrivate,color: '#e88832'}}>Terms of service</Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity onPress={() => alert('Privacy Policy!')}>
          <Text style={{...styles.color_textPrivate,color: '#e88832'}}>Privacy Policy.</Text>
        </TouchableOpacity>
      </View>

      <SocialButton
        buttonTitle="Sign Up with Facebook"
        buttonType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
      />

      <SocialButton
        buttonTitle="Sign Up with Google"
        buttonType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.navButtonText}>Have an account? Sign in.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    // fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 10,
  },
  forgotButton: {
    marginVertical: 20,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    // fontFamily: "Lato-Regular",
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
