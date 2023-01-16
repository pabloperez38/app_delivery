import { ActivityIndicator, View } from "react-native";
import { LoginScreen, RegisterScreen } from "./src/Presentacion/pantallas";

import { COLORES } from "./src/constantes/tema/colores";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { useFonts } from "expo-font";

export type RootStackParamList = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
  }
  
  const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded] = useFonts({
    "Sora-Regular": require("./assets/fuentes/Sora-Regular.ttf"),
    "Sora-Bold": require("./assets/fuentes/Sora-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={COLORES.secundario} size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "LoginScreen" }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: "Registro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
