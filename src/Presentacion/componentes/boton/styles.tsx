import { COLORES } from "../../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boton: {
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 60,
    borderRadius: 10,
    backgroundColor: COLORES.secundario,
  },
  textoBoton: {
    fontFamily: "Sora-Bold",
    fontSize: 16,
    color: COLORES.blanco,
    alignItems: "center",
  },
});
