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
    height: "50%",
    backgroundColor: COLORES.blanco,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  logoContainer: { position: "absolute", alignSelf: "center", top: "12%" },
  logo: { width: 200, height: 200 },
  titulo: {
    fontFamily: "Sora-Bold",
    fontSize: 22,
    marginBottom: 16,
    marginLeft: 10,
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
