import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.negro
      },
      imageBackground:{
        width:"100%",
        height:"100%",
        opacity:0.5,
        bottom:"25%"
      },
      form:{
        width:"100%",
        height:"70%",
        backgroundColor:COLORS.blanco,
        position:"absolute",
        bottom:0,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        padding:30
      },
      formText:{
        fontWeight:"bold",
        fontSize: 18
      },
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
      logoContainter:{
        position:"absolute",
        alignSelf:"center",
        top:"5%",
        alignItems:"center"
      },      
      logoImage:{
        width:125,
        height:125
      },
      logoText:{
        color:COLORS.blanco,
        textAlign:"center",
        fontSize:18,
        marginTop:10,
        fontWeight:"bold"
      },   
      containerButton:{
        marginTop:30
      },
      formRegister:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20
      },
      formRegisterText:{
        fontStyle:"italic",
        color:COLORS.primary,
        borderBottomWidth:1,
        borderBottomColor:COLORS.primary,
        fontWeight:"bold",
        marginLeft:10
      }
    
});
