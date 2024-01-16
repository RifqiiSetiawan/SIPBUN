import { View, Text, ImageBackground, StyleSheet, Image, useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import { COLORS, images } from "../constants";
import { SafeAreaView } from 'react-native-safe-area-context'
import Costuminput from '../components/costuminput';
import Costumbutton from '../components/costumbutton';


const SignIn = () => {
  const[nip, setNip] = useState('');
  const[password, setPassword] = useState('')
  const{height}=useWindowDimensions();

  const onSignInPressed=()=>{
    console.warn('SignIn')
  }

  const continueassguest=()=>{
    console.warn('skip')
  }

  return (
    <ImageBackground
      source={images.bg}
      style={{flex:1}}
    >
      <SafeAreaView>
        <View style={styles.root}>
          <Image
            source={images.avatar}
            style={[styles.logo, {height:height*0.35}]}
            resizeMode='contain'
          />
          <Text style={styles.title}>
            SIPBUN BENGKALIS
          </Text>
          <Text style={styles.desk}>
            SISTEM INFORMASI PERKEBUNAN BENGKALIS
          </Text>
            <Costuminput 
              placeholder="Nomor Induk Pegawai" 
              value={nip}
              setValue={setNip}
              />          
            <Costuminput
              placeholder="Password" 
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />      
            <Costumbutton
              onPress={onSignInPressed}
              text='Sign In'
            />
        </View>
        <Text style={styles.skip} onPress={continueassguest}>
          Continued As Guest
        </Text>
      </SafeAreaView>
    </ImageBackground>
    
  )
}
const styles=StyleSheet.create({
  root:{
    alignItems:'center',
    padding:20,
  },
  logo:{
    width:'50%',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:COLORS.white,
  },
  desk:{
    color:COLORS.white,
    fontSize:18,
    textAlign:'center',
    marginBottom:20
  },
  loginform:{
    marginTop:20
  },
  skip:{
    color:'white',
    textAlign:'center',
    marginTop:15,
    textDecorationLine:'underline'
  }

})

export default SignIn;