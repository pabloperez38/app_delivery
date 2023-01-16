import { COLORES } from "../../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORES.negro,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
    bottom: "20%",
  },
  form: {
    width: "100%",
    height: "70%",
    backgroundColor: COLORES.blanco,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "6%",
    alignItems: "center",
  },
  logo: { width: 140, height: 140 },
  texto: { fontFamily: "Sora-Bold", color: COLORES.blanco },
  titulo: {
    fontFamily: "Sora-Bold",
    fontSize: 22,
    marginBottom: 16,
    marginLeft: 10,
  },
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
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textoBottom: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text1: { fontFamily: "Sora-Regular" },
  text2: { fontFamily: "Sora-Bold", color: COLORES.secundario, marginLeft: 10 },
});
