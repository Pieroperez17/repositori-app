import React from "react";
import {View, StyleSheet} from "react-native"
import StyleText from "./StyledText"
import RepositoryStarts from "./RepositoryStats"



const RepositoryItems = (props) => (
    <View key={props.id} style={styles.container}>
        <StyleText fontSize='subheading' fontWeight='bold'>Fullname: {props.fullName}</StyleText>
        <StyleText >{props.description}</StyleText>
        <StyleText >{props.language}</StyleText>
        <RepositoryStarts {... props} />
    </View>
)   

const styles = StyleSheet.create({  
    container:{
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    }
})


export default RepositoryItems;