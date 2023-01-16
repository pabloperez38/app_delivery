import { Image, ScrollView, Text, ToastAndroid, View } from "react-native";
import React, {useEffect} from "react";

import Boton from "../../componentes/boton";
import InputText from "../../componentes/input";
import { RootStackParamList } from '../../../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import useViewModel from "./ViewModel";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {
    name,
    email,
    phone,
    password,
    confirmarPassword,
    onChange,
    registro,   
    errorMessage
  } = useViewModel();

  useEffect(() => {
    if(errorMessage !== ""){
       ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
   
  }, [errorMessage])
  

  const goToLogin = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/pizza.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/user_image.png")}
        />
        <Text style={styles.texto}>SELECCIONA UNA MAGEN</Text>
      </View>
      
      <View style={styles.form}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.titulo}>REGISTRARSE</Text>
        <InputText
          placeholder="Nombre"
          value={name}
          keyboardType="default"
          property="name"
          onChangeText={onChange}
          icono="ios-person-outline"
        />
        <InputText
          placeholder="Correo electrónico"
          value={email}
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          icono="ios-at"
        />
        <InputText
          placeholder="Teléfono"
          value={phone}
          keyboardType="numeric"
          property="phone"
          onChangeText={onChange}
          icono="ios-phone-portrait-outline"
        />
        <InputText
          placeholder="Contraseña"
          value={password}
          keyboardType="default"
          property="password"
          onChangeText={onChange}
          icono="eye-off-outline"
          secureTextEntry={true}
        />
        <InputText
          placeholder="Repetir contraseña"
          value={confirmarPassword}
          keyboardType="default"
          property="confirmarPassword"
          onChangeText={onChange}
          icono="eye-off-outline"
          secureTextEntry={true}
        />

        <View style={styles.containerButton}>
          <Boton titulo="CONFIRMAR" onPress={() => registro()} />
        </View>
        <View style={styles.textoBottom}>
          <Text style={styles.text1}>Ya tengo cuenta</Text>
          <Text onPress={goToLogin} style={styles.text2}>
            Ingresar
          </Text>
        </View>
        </ScrollView>
      </View>
     
    </View>
  );
};

export default RegisterScreen;
