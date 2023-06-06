import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from "./styles";

interface Props {
  text:string,
  onPress: () => void
}

export const RoundedButton = ({ text, onPress }: Props) => {
  return (
   <TouchableOpacity
   style={styles.roundedButton}
   onPress={() => onPress()}
   >
    <Text style={styles.textButton}>{ text }</Text>
   </TouchableOpacity>
  )
}
