import React from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import TextInputLabel from '../../components/TextInputLabel/TextInputLabel';
import styles from './styles';
const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageContainer}
        source={{
          uri: 'https://s3-us-west-2.amazonaws.com/utsw-patientcare-web-production/original_images/blog-baby-boy-circumcision.jpg',
        }}>
        <Text style={styles.loginTextStyle}>LOGIN</Text>
      </ImageBackground>
      <View style={styles.mainStyle}>
        <TextInputLabel
          label="Enter email"
          style={styles.inputStyle}
          placeholder="Enter your email "
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType={'email-address'}
        />
        <TextInputLabel
          label="Enter password"
          style={styles.inputStyle}
          placeholder="Enter your password "
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};
export default Login;
