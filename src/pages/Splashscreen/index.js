import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { BackgrounD, SnacK } from '../../image/logo'
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const Splashscreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={BackgrounD} style={{ flex: 1, width: width, height: height }}>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: height * 0.3 }}>
          <Image source={SnacK} style={{ width: width * 0.5, height: width * 0.5 }} />
        </View>
      </ImageBackground>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Tersedia Kopi Tradisional khas Daerah</Text>
        <Text>Kopi Dengan Kualitas Terbaik dari Indonesia</Text>
        <TouchableOpacity style={{ backgroundColor: '#00512C', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 15, marginTop: 20 }} onPress={() => navigation.navigate('MainApp')}>
          <Text style={{ color: 'white', fontSize: 15 }}>Mulai Belanja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Splashscreen

const styles = StyleSheet.create({})