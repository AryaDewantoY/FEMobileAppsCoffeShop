import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Kopi3 } from '../../image/logo'
import { Love, Koppi } from '../../image/icon';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SimpleSelectButton from 'react-native-simple-select-button';

const Produk = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        <View>
            <ImageBackground source={Koppi}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginHorizontal: 10}}>
                    <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 25}} onPress={() => navigation.navigate('MainApp')}>
                    <MaterialIcons name="keyboard-double-arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, paddingVertical: 5, paddingHorizontal: 5}} onPress={() => navigation.navigate('MainApp')}>
                    <Image source={Love} />
                  </TouchableOpacity>
                </View>
                    <View style={{marginTop: 250, marginBottom: 40, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center'}}>
                        <View>
                            <Text style={{fontSize: 30, color: 'white', fontWeight: '600'}}>Kopi Gula Aren</Text>
                            <Text style={{color: 'white', fontSize: 15}}>Less Sugar</Text>
                        </View>
                        <View style={{backgroundColor: '#c1925b', flexDirection: 'row', alignItems: 'center', paddingHorizontal:10, paddingVertical: 5, borderRadius: 20}}>
                        <Feather name="star" size={20} color="white" />
                        <Text style={{marginLeft: 6, color: 'white' }}>4.7</Text>
                        </View>
                    </View>
            </ImageBackground>
        </View>
         <View style={{backgroundColor: 'white', flex: 1, borderTopLeftRadius: 35, borderTopRightRadius: 35, marginTop: -35}}>
            {/* Cup Size */}
            <View style={{marginHorizontal: 30, marginVertical: 15, justifyContent: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>Size</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{backgroundColor: '#00512C', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 25, marginRight: 10, marginVertical: 10}}>
                        <Text style={{color: 'white', fontWeight: '600'}}>Small Size</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingHorizontal: 20, elevation: 5, shadowColor: 'black', marginRight: 10, paddingVertical: 5, borderRadius: 25, marginVertical: 10}}>
                        <Text style={{color: '#00512C', fontWeight: '600'}}>Medium Size</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingHorizontal: 20, elevation: 5, shadowColor: 'black', marginRight: 10, paddingVertical: 5, borderRadius: 25, marginVertical: 10}}>
                        <Text style={{color: '#00512C', fontWeight: '600'}}>Large Size</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* End Cup Size */}
                {/* Sugar Size */}
                <View style={{marginHorizontal: 30, marginVertical: 15, justifyContent: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>Sugar</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingHorizontal: 20, elevation: 5, shadowColor: 'black', marginRight: 10, paddingVertical: 5, borderRadius: 25, marginVertical: 10}}>
                        <Text style={{color: '#00512C', fontWeight: '600'}}>No Sugar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#00512C', paddingHorizontal: 20, elevation: 5, shadowColor: 'black', marginRight: 10, paddingVertical: 5, borderRadius: 25, marginVertical: 10}}>
                        <Text style={{color: 'white', fontWeight: '600'}}>Less Sugar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', paddingHorizontal: 20, elevation: 5, shadowColor: 'black', marginRight: 10, paddingVertical: 5, borderRadius: 25, marginVertical: 10}}>
                        <Text style={{color: '#00512C', fontWeight: '600'}}>Normal Sugar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* End Sugar Size */}
            {/* About me */}
                <View style={{marginHorizontal: 30, marginBottom: 20}}>
                    <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 10}}>About Coffe</Text>
                    <Text>Every morning I long to hold you…I need you, I want you, I have to have you…your warmth, your smell, your taste…ohhh coffee, I love you...</Text>
                    <TouchableOpacity>
                        <Text style={{fontWeight: '500'}}>Read More</Text>
                    </TouchableOpacity>
                </View>
            {/* End ABout */}
            {/* Add Cart */}
                <View style={{marginHorizontal: 20}}>
                    <TouchableOpacity style={{backgroundColor: '#00512C', borderRadius: 30, alignItems: 'center', paddingVertical: 20}} onPress={() => navigation.navigate('Cart')}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>Add to Cart | Rp50.000</Text>
                    </TouchableOpacity>
                </View>
            {/* End Cart */}
        </View>
    </View>
  )
}

export default Produk

const styles = StyleSheet.create({})