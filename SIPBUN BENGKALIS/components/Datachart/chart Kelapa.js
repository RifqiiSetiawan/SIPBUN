import React from 'react';
import { StyleSheet,View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Chartkelapa = () => {
  const data = {
    labels: ['9/1', '10/01', '11/01', '12/01', '13/01',  '14/01', '15/01'],
    datasets: [
        {
            data: [2810, 2900, 2930, 2800, 3000, 3100, 3150],
            color: (opacity = 1) => `rgba(219, 204, 149, ${opacity})`,
            strokeWidth: 2, 
        },
        {
        data: [2700, 2600, 2900, 2750, 2990, 3000, 3010],
        color: (opacity = 1) => `rgba(218, 255, 71, ${opacity})`,
        strokeWidth: 2, 
        },
      
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#1E2923',
    backgroundGradientToOpacity: 0.5,
    decimalPlaces:0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
  };
  const screenWidth = Dimensions.get('window').width; 
  return (
    <View style={{backgroundColor:'#221F3A', marginTop:20, borderRadius:10}}>
      <View style={styles.container}>
        <Text style={styles.box1}>
        Kelapa Bulat
        </Text>
        <Text style={styles.box2}>
            3,150 <Text style={{fontSize:16}}>Rp/Kg</Text>
        </Text>
      </View>
      
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    box1:{
        padding:10,
        color:'white',
        fontSize:20
    },
    box2:{
        padding:10,
        color:'white',
        fontSize:20
    }
})
export default Chartkelapa;
