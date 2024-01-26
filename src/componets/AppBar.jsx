import React from "react";
import {View, StyleSheet, TouchableWithoutFeedback, ScrollView} from "react-native";   
import StyleText from "./StyledText";
import Constantants from "expo-constants";
import theme from "../themes";
import { Link, useLocation} from "react-router-native"; 


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constantants.statusBarHeight+10,
    },  
    scroll:{
        paddingBottom: 15,
    },
    text:{
        color: theme.appBar.textsecondary ,
        paddingHorizontal: 10,
    },
    active:{
        color: theme.appBar.textPrimary,
    }
})

const AppBartab = ({children,to}) => {
    const {pathname} = useLocation();

    const active = pathname === to;

    const textStyles = [
        styles.text,
        active && styles.active,
    ]
    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyleText fontWeight='bold' style={textStyles}>
                {children}
            </StyleText>
        </Link>
    )
}


const AppBar = () => {
    return(
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
                <AppBartab  to='/'>Repositories</AppBartab>
                <AppBartab  to='/signin'>Sign In</AppBartab>
                
            </ScrollView>
        </View>    
    )
}

export default AppBar; 


