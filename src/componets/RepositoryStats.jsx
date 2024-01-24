import React from "react";
import {View} from "react-native"
import StyleText from "./StyledText"

const parceThousands = (value) => {
    return value>=1000 
        ? `${Math.round(value/100) /10}k` 
        : String(value)
}

const RepositoryStarts = (props) => {
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View>
                <StyleText align='center' >{parceThousands(props.stargazersCount)}</StyleText>
                <StyleText align='center' fontWeight='bold' >Starts</StyleText>
            </View>
            <View>
                <StyleText align='center' >{parceThousands(props.forksCount)}</StyleText>
                <StyleText align='center' fontWeight='bold' >Forks</StyleText>
            </View>
            <View>
                <StyleText align='center' >{props.reviewCount}</StyleText>
                <StyleText align='center' fontWeight='bold' >Reviews</StyleText>
            </View>
            <View>
                <StyleText align='center' >{props.ratingAverage}</StyleText>
                <StyleText align='center' fontWeight='bold' >Rating</StyleText>
            </View>

        </View>
    )
}
export default RepositoryStarts;