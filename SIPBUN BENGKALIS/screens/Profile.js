import { View, Text, Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

  const Navigation=useNavigation();
  const eksport=()=>{
    Linking.openURL('https://docs.google.com/spreadsheets/d/1_4_O4ivFDDjvWiD5UHEkwGQ5zTreRQRh/edit?usp=sharing&ouid=113046384785763958693&rtpof=true&sd=true')
  }
  const logout=()=>{
    Navigation.navigate('Home')
  }

  return (
    <SafeAreaView>
      <Text style={{
            fontSize: 25,
            fontWeight: "bold",
            color: COLORS.black,
            marginTop: 20,
            marginLeft: 10,
            height: 50}}>Profile
        </Text>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          backgroundColor:COLORS.green,
          padding:10,
          marginLeft:10,
          marginRight:10,
          height:100,
          borderRadius:10
        }}>
          <Image
            source={icons.picture}
            resizeMode='contain'
            style={{
              height: 50,
              width: 50,
            }}
          />
          <View style={{
            marginLeft:15
          }}>
            <Text style={{
              fontSize:20, 
              fontWeight:'bold',
              color:"white"
            }}>Iyon Setiawan S.Sos</Text>
            <Text style={{
              fontSize:12, 
              color:"white"
            }}>19701028 2001021 102</Text>
          </View>
        </View>
        <TouchableOpacity onPress={eksport}>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          backgroundColor:COLORS.white,
          padding:10,
          marginTop:30,
          marginRight:10,
          marginLeft:10,
          height:80,
          borderRadius:10,
        }}>
          <Image
            source={icons.download}
            resizeMode='contain'
            style={{
              height: 30,
              width: 30,
              marginLeft:10,
              tintColor:'black'
            }}
          />
          <Text style={{
            fontSize:16, 
            marginLeft:20,
            color:"black",
            fontWeight:'600'
          }}>
            Unduh Data Harga Komoditi
          </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          backgroundColor:COLORS.white,
          padding:10,
          marginTop:15,
          marginRight:10,
          marginLeft:10,
          height:80,
          borderRadius:10,
        }}>
          <Image
            source={icons.Logout}
            resizeMode='contain'
            style={{
              height: 30,
              width: 30,
              marginLeft:10,
              tintColor:'black'
            }}
          />
          <Text style={{
            fontSize:16, 
            marginLeft:20,
            color:"black",
            fontWeight:'600'
          }}>
            Logout
          </Text>
        </View>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Profile