import { Image, Text, ToastAndroid, View } from "react-native";
import React, {useEffect} from "react";
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import Boton from "../../componentes/boton";
import InputText from "../../componentes/input";
import { RootStackParamList } from '../../../../App';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import useViewModel from "./ViewModel";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen">{};

export const LoginScreen = ({navigation, route}: Props) => {
  const { email, password, onChange, login, errorMessage, user } = useViewModel();
 

  const goToRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  useEffect(() => {

    if(errorMessage!==""){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
   
  }, [errorMessage])
  
  useEffect(() => {
    if(user?.id !== null && user?.id !== undefined)
    {
      navigation.replace("ProfileInfoScreen");
    }
  }, [user])
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/pizza.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/logo.png")}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.titulo}>INGRESAR</Text>
        <InputText
          placeholder="Correo electrónico"
          value={email}
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          icono="ios-at"
        />
        <InputText
          placeholder="Contraseña"
          value={password}
          keyboardType="default"
          property="password"
          secureTextEntry={true}
          onChangeText={onChange}
          icono="eye-off-outline"
        />
        <View style={styles.containerButton}>
          <Boton titulo="INICIAR SESIÓN" onPress={() => login()} />
        </View>
        <View style={styles.textoBottom}>
          <Text style={styles.text1}>No tienes cuenta?</Text>
          <Text onPress={goToRegister} style={styles.text2}>
            Registrate
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
