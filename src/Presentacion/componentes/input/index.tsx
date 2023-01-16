import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";

const InputText = (props) => {
  const {
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText,
    icono,
  } = props;
  return (
    <View style={styles.containerInput}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
      <Ionicons style={styles.icono} name={icono} />
    </View>
  );
};

export default InputText;
