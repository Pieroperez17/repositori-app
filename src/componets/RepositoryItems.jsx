import React from "react";
import {Image,View, StyleSheet, Platform} from "react-native"
import StyleText from "./StyledText"
import RepositoryStarts from "./RepositoryStats"
import theme from "../themes";

const RepositoryItemHeader = ({ownerAvatarUrl,fullName,description,language}) => (
    <View style={{flexDirection:'row', paddingBottom:2,}}>
        <View style={{flex: 0,paddingRight:10,}}>
            <Image style={styles.image} source={{uri: ownerAvatarUrl}}/>
        </View>
        <View style={{flex: 1,}}>
            <StyleText fontWeight='bold'>Fullname: {fullName}</StyleText>
            <StyleText color='secondary'>{description}</StyleText>
            <StyleText style={styles.language}>{language}</StyleText>
        </View>
    </View>
)

const RepositoryItems = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {... props} />
        <RepositoryStarts {... props} />
    </View>
)   

const styles = StyleSheet.create({  
    container:{
        padding: 20,
        paddingVertical: 5,
    },
    language:{
        padding: 4,
        color: theme.color.white,
        backgroundColor: theme.color.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,    
        borderRadius: 4,
        overflow: 'hidden',
    },
    image:{
        width: 48,
        height: 48,
        margin: 'auto',
        borderRadius: 4,
    }
})


export default RepositoryItems;