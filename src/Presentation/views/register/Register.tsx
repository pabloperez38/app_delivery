import React, { useEffect } from 'react'
import { Image, Text, View, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton/RoundedButton';
import {styles} from "./styles"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from '../../../../App';
import useViewModel from "./ViewModel"
import { CustonTextInput } from '../../components/CustomTextInput/CustonTextInput';

export const RegisterScreen = () => {

  const {name,lastName,phone,email,password,confirmPassword,onChange,register,errorMessage} = useViewModel();

  useEffect(() => {
    if(errorMessage !=""){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }    
  }, [errorMessage])  

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
         <Image
          source={require("../../../../assets/pizza.jpg")}
          style={styles.imageBackground}
          />
          <View style={styles.logoContainter}>
            <Image
            source={require("../../../../assets/user_image.png")}
            style={styles.logoImage}
            />
            <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
          </View>
          <View style={styles.form}>

            <ScrollView>

              <Text style={styles.formText}>REGISTRARSE</Text>

              <CustonTextInput
                placeholder='Nombre'
                keyboardType='default'
                image={require("../../../../assets/user.png")}
                property="name"
                onChangeText={onChange}
                value={name}
              />

              <CustonTextInput
                placeholder='Apellido'
                keyboardType='default'
                image={require("../../../../assets/my_user.png")}
                property="lastName"
                onChangeText={onChange}
                value={lastName}
              />

              <CustonTextInput
                placeholder='Teléfono'
                keyboardType='numeric'
                image={require("../../../../assets/phone.png")}
                property="phone"
                onChangeText={onChange}
                value={phone}
              /> 

              <CustonTextInput
                placeholder='Email'
                keyboardType='email-address'
                image={require("../../../../assets/email.png")}
                property="email"
                onChangeText={onChange}
                value={email}
              />

              <CustonTextInput
                placeholder='Contraseña'
                keyboardType='default'
                image={require("../../../../assets/password.png")}
                property="password"
                onChangeText={onChange}
                value={password}
                secureTextEntry={true}
              />  

              <CustonTextInput
                placeholder='Repetir contraseña'
                keyboardType='default'
                image={require("../../../../assets/confirm_password.png")}
                property="confirmPassword"
                onChangeText={onChange}
                value={confirmPassword}
                secureTextEntry={true}
              />

              <View style={styles.containerButton}>
                <RoundedButton text="REGISTRARME" onPress={() => register()} />
              </View>

              <View style={styles.formRegister}>    
                <Text>Ya tengo cuenta</Text>
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                  <Text style={styles.formRegisterText}>Iniciar sesión</Text>
                </TouchableOpacity>
              </View>

            </ScrollView>

          </View>
          
        </View>
      );
}
