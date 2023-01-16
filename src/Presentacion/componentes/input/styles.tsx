import { COLORES } from "../../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  icono: {
    position: "absolute",
    right: 0,
    bottom: 10,
    color: COLORES.secundario,
    fontSize: 28,
  },
  input: {
    justifyContent: "center",
    height: 50,
    fontFamily: "Sora-Regular",
    fontSize: 15,
    color: COLORES.secundario,
    width: "85%",
  },
});
