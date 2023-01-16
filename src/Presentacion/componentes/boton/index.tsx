import { Button } from "react-native-elements";
import React from "react";
import { styles } from "./styles";

const Boton = (props) => {
  const { titulo, onPress } = props;
  return (
    <Button
      title={titulo}
      buttonStyle={styles.boton}
      titleStyle={styles.textoBoton}
      onPress={() => onPress()}
    />
  );
};

export default Boton;
