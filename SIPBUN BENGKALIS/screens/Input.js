import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../constants';
import Inputs from '../components/inputform'
import Costumbutton from '../components/costumbutton';

const Input = () => {
  const savedata=()=>{
    console.warn('Data Telah Tersimpan')
  }
  const reset=()=>{
    console.warn('Form Telah Di reset')
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLORS.green,
        padding: 16,
        maxHeight: 100,
        
      }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.white,
            marginTop: 10,
            marginLeft: 10,
            height: 50,
          }}
        >Halaman Input Data Harga Komoditi
        </Text>
      </View>
      <ScrollView style={{flex:1}}> 
        <View style={{
          flex: 1,
          backgroundColor: COLORS.white,
          padding: 16,
        }}>
          <Inputs
            label="Kecamatan"
            placeholder="Pilih Kecamatan"
          />
          <Inputs
            label="Tanggal"
            placeholder='Pilih Tanggal'
          />
          <Inputs
            label="Komoditi"
            placeholder='Pilih Jenis Komoditi'
          />
          <Inputs
            label="Harga Tingkat Petani Rp/Kg"
            placeholder='Masukkan Harga'
          />
          <Inputs
            label="Harga Tingkat Pedagang Rp/Kg"
            placeholder='Masukkan Harga'
          />
          <Costumbutton
              onPress={savedata}
              text='Simpan Data'
            />
            <Costumbutton
              onPress={reset}
              text='Reset'
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Input;