import { View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../constants';
import Inputs from '../components/inputform'
import Costumbutton from '../components/costumbutton';

const History = () => {
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
            textAlign:"center"
          }}
        >Halaman Riwayat Data Harga Komoditi
        </Text>
      </View>
      <View style={{
        flex:1,
        backgroundColor: COLORS.white,
        padding: 16,
      }}>
          <Inputs
            label="Kecamatan"
            placeholder='Pilih Kecamatan'
          />
          <Inputs
            label="Komoditi"
            placeholder='Pilih Jenis Komoditi'
          />
          <Costumbutton
              text='Tampilkan'
            />
      </View>
      <View style={{flex:1, backgroundColor:COLORS.white}}>
          <Text style={{
            textAlign:'center',
            marginVertical:'50',
            color:'black'
          }}>Belum Ada Data Yang Tersedia</Text>
          </View>
    </SafeAreaView>
  )
}

export default History;