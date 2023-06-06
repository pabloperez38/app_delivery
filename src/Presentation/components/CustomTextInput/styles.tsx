import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    
      formInput:{
        flexDirection:"row",
        marginTop:30
        },
      formTextInput:{
        flex:1,
        borderBottomWidth:1,
        borderBottomColor:COLORS.gris,
        marginLeft:10,
        fontSize:17
      },
      formIcon:{
        width:25,
        height:25,
        marginTop:5
      },    
    
});
