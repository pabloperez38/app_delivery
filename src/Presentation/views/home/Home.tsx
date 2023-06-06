import React, { useState, useEffect } from 'react'
import { Image, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton/RoundedButton';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from '../../../../App';
import useViewModel from "./ViewModel"
import { CustonTextInput } from '../../components/CustomTextInput/CustonTextInput';

export const HomeScreen = () => {

  const {email, password, onChange, login, errorMessage} = useViewModel();
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    if(errorMessage !== ""){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])
  

    return (
        <View style={styles.container}>
         <Image
          source={require("../../../../assets/pizza.jpg")}
          style={styles.imageBackground}
          />
          <View style={styles.logoContainter}>
            <Image
            source={require("../../../../assets/logo.png")}
            style={styles.logoImage}
            />
            <Text style={styles.logoText}>Delivery App</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formText}>LOGIN DE USUARIO</Text>
           
           <CustonTextInput
            image={require('../../../../assets/email.png')}
            placeholder="Email"
            keyboardType='email-address'
            property='email'
            onChangeText={ onChange }
            value={email}
           />

          <CustonTextInput
            image={require('../../../../assets/password.png')}
            placeholder="Contraseña"
            keyboardType='default'
            property='password'
            onChangeText={ onChange }
            value={password}
            secureTextEntry={true}
           />
           
            <View style={styles.containerButton}>
              <RoundedButton text="INGRESAR" onPress={() => login() } />
            </View>
            <View style={styles.formRegister}>    
              <Text>No tienes cuenta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                <Text style={styles.formRegisterText}>Registrate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
}
