import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from '../../screens/Login/styles';
const TextInputLabel = ({placeholder, label, inputStyle = {}, ...props}) => {
  return (
    <View>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={{...styles.inputStyle, ...inputStyle}}
        {...props}
      />
    </View>
  );
};
export default TextInputLabel;
