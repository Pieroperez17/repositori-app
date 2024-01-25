import React from "react"
import {Text, StyleSheet} from "react-native"
import theme from '../themes.js'

const styles = StyleSheet.create({
    text:{
        fontsize: theme.fontSizes.body,
        color: theme.color.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary:{
        color: theme.color.primary
    },
    colorSecondary:{
        color: theme.color.secondary
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    subheading:{
        fontSize: theme.fontSizes.subheading
    },
    TextAlignCenter:{
        textAlign: "center"
    }
})

export default function StyleText({align ,children, color, fontSize, fontWeight, style, ...restOfProps}){

    const textStyles = [
        styles.text,
        align === "center" && styles.TextAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,   
        style   
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}