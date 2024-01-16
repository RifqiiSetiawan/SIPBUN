import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons } from '../constants';
import { Chartsawit, Chartkaret, Chartkelapa, Chartkopi, Chartpinang, Chartsagu } from '../screens/index';

const Kecamatan = ["Bengkalis", "Bantan", "Bukit Batu", "Mandau", "Rupat", "Rupat Utara", "Siak Kecil", "Pinggir", "Tualang Mandau", "Bandar Laksamana", "Bathin Solapan"];

const Home = ({ navigation }) => {
  const [activeKecamatan, setactiveKecamatan] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: COLORS.green,
          padding: 16,
          maxHeight: 100,
        }}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{
              height: 45,
              width: 45,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.menu}
              resizeMode='contain'
              style={{
                height: 30,
                width: 30,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.white,
              marginTop: 10,
              marginLeft: 10,
              height: 50,
            }}
          >SIPBUN BENGKALIS
          </Text>
          <Image
            source={icons.logo}
            resizeMode='contain'
            style={{
              height: 50,
              width: 50,
              tintColor: COLORS.black,
            }}
          />
        </View>
        <View style={{
          backgroundColor: COLORS.white,
          padding: 16,
        }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'left',
              marginBottom: 10,
            }}
          >Cari Berdasarkan Kecamatan
          </Text>
          <FlatList
            data={Kecamatan}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={activeKecamatan === item ? styles.tabSelected : styles.tabUnselected}
                onPress={() => {
                  setactiveKecamatan(item);
                }}
              >
                <Text style={styles.tabText(activeKecamatan, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{ marginRight: 12 }}
            horizontal
          />
        </View>
        <View>
          <Chartsawit />
          <Chartkelapa />
          <Chartkaret />
          <Chartpinang />
          <Chartkopi />
          <Chartsagu />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  tabSelected: {
    backgroundColor: COLORS.green2,
    padding: 10,
    borderRadius: 8,
    marginRight: 12,
  },
  tabUnselected: {
    backgroundColor: COLORS.lightgray,
    padding: 10,
    borderRadius: 8,
    marginRight: 12,
  },
  tabText: (activeKecamatan, item) => ({
    color: activeKecamatan === item ? COLORS.white : COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
  }),
};

export default Home;
