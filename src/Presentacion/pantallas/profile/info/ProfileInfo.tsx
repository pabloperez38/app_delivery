import { Button, Text, View } from 'react-native'

import React from 'react'
import { RootStackParamList } from '../../../../../App'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from './styles'
import useViewModel from "./ViewModel"

interface Props extends StackScreenProps<RootStackParamList, "ProfileInfoScreen">{};

export const ProfileInfoScreen = ({navigation, route}:Props) => {

  const {removeSession} = useViewModel();

  return <View style={styles.container}>
    <Button onPress={() =>{
      
      removeSession();
      navigation.navigate("LoginScreen");

    }} title='Cerrar sesión' />
  </View>
}
