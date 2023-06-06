import React from 'react'
import { Image, KeyboardType, TextInput, View } from 'react-native'
import { styles } from "./styles";

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?:boolean,
    property: string,
    onChangeText: (property: string, value: any) => void 
}

export const CustonTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
  return (
    <View style={styles.formInput}>
        <Image
            style={styles.formIcon}
            source={ image }
            />
        <TextInput
            placeholder={placeholder}
            style={styles.formTextInput}
            keyboardType={keyboardType}
            value={value}
            autoCapitalize='none'
            onChangeText = { text => onChangeText(property, text)}
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}
