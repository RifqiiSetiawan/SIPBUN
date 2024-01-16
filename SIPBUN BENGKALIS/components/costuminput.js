import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

const costuminput=({value, setValue, placeholder, secureTextEntry})=>{
    return(
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                style={styles.Input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            >

            </TextInput>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:'100%',
        borderColor:"white",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,

    },
    Input:{
        height:40

    }
})
export default costuminput;