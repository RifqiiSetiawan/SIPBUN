import React from "react";
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native'
import { COLORS } from "../constants";

const costumbutton=({onPress, text})=>{
    return(
        <Pressable 
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:COLORS.green,
        alignItems:"center",
        borderWidth:1,
        borderRadius:5,
        padding:15,
        marginVertical:10,
        width:'100%'

    },
    text:{
        fontWeight:"bold",
        color:'white'
    }
})
export default costumbutton;