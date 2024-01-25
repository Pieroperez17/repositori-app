import React from "react";
import {View, StyleSheet} from "react-native";   
import StyleText from "./StyledText";
import Constantants from "expo-constants";
import theme from "../themes";

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constantants.statusBarHeight+10,
        paddingBottom: 10,
        paddingLeft: 10,
        
    },  
    text:{
        color: theme.appBar.textPrimary ,
    }    
})

const AppBar = () => {
    return(
        <View style={styles.container}>
            <StyleText fontWeight='bold' style={styles.text}>
                Respositories
            </StyleText>
        </View>    
    )
}
export default AppBar; 


