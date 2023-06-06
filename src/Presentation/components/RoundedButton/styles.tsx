import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    roundedButton:{
        width:"100%",
        height:50,
        backgroundColor:COLORS.primary,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    textButton:{
        color:COLORS.blanco,
        fontSize:16,
        fontWeight:"bold"
    }
})