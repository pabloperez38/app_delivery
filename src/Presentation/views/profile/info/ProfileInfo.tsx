import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from "./styles"
import useViewModel from "./ViewModel"
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../../App'

interface Props extends StackScreenProps<RootStackParamList, "ProfileInfoScreen">{};

export const ProfileInfoScreen = ({navigation, route}:Props) => {

  const { removeSession } = useViewModel();

  return (
  <View style={styles.container}>
    <Button
    title='Cerrar sesión'
    onPress={() => {
      removeSession();
      navigation.navigate("HomeScreen");
    }}
    />
    </View>)
}
