import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native"; 
import React from "react";
import { Koppi, Love, Adding, Loving } from "../../image/icon";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const Cart = ({navigation}) => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count +1 );
  }
  const mines = () => {
    if (count > 0) {
      setCount(count -1)
    }
  }
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      {/* Produk 1 */}
      <View style={{ marginLeft: 20, marginRight:30, marginTop: 20 }}>
        <Text style={{ fontWeight: '600' }}>Cart</Text>
        <ScrollView showsVerticalScrollIndicator={false}>

       {/* Product 1 */}
       <View style={styles.menu}>
            <View
              activeOpacity={0.5}
              style={styles.touchable}
            >
              <TouchableOpacity onPress={() => navigation.navigate('Produk')}>
              <Image source={Koppi} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.info}>
                <Text style={styles.title}>Cappuccino Lampung</Text>
                <Text style={styles.description}>Medium roast</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>Rp. 35.000</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.icon}
                  >
                    <Image source={Love} />
                  </TouchableOpacity>
                </View>
                <View  activeOpacity={0.5} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginHorizontal: 5}}>
                  <View>
                    <Text style={{ color: 'grey', fontSize: 11}}> Small <Text style={{ fontWeight: '600', color: 'black'}}>Large</Text></Text> 
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5}} >
                  <TouchableOpacity activeOpacity={0.5} onPress={mines} style={{marginHorizontal:5}}>
                  <AntDesign name="minuscircle" size={30} color="#00512C"/>
                  </TouchableOpacity>
                    <Text style={{fontSize: 25, fontWeight: '600'}}>{count}</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={plus} style={{marginHorizontal:5}}>
                  <Image source={Adding} />
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* End Product 1 */}

          {/* Product 2 */}
          <View style={styles.menu}>
            <View
              activeOpacity={0.5}
              style={styles.touchable}
              onPress={() => navigation.navigate('Produk')}
            >
              <TouchableOpacity onPress={() => navigation.navigate('Produk')}>
              <Image source={Koppi} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.info}>
                <Text style={styles.title}>Cappuccino Lampung</Text>
                <Text style={styles.description}>Medium roast</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>Rp. 35.000</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.icon}
                  >
                    <Image source={Loving} />
                  </TouchableOpacity>
                </View>
                <View  activeOpacity={0.5} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginHorizontal: 5}}>
                  <View>
                    <Text style={{ color: 'grey', fontSize: 11}}> Small <Text style={{ fontWeight: '600', color: 'black'}}>Large</Text></Text> 
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5}} >
                  <TouchableOpacity activeOpacity={0.5} onPress={mines} style={{marginHorizontal:5}}>
                  <AntDesign name="minuscircle" size={30} color="#00512C"/>
                  </TouchableOpacity>
                    <Text style={{fontSize: 25, fontWeight: '600'}}>{count}</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={plus} style={{marginHorizontal:5}}>
                  <Image source={Adding} />
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* End Product 2 */}

          {/* Total Harga */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15}}>
            <Text style={{fontWeight: 'bold'}}>SubTotal</Text>
            <Text>Rp75.000</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5, borderBottomWidth: 1, borderBottomColor: 'black' }}>
            <Text style={{fontWeight: 'bold'}}>Disscount</Text>
            <Text>Rp25.000</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center', marginTop: 15}}>
            <Text style={{fontWeight: 'bold'}}>Total</Text>
            <Text>Rp50.000</Text>
          </View>
          {/* End Total */}
          {/* Payment */}
          <View style={{marginTop: 30}}>
            <Text style={{fontWeight: 'bold'}}>Payment</Text>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <TouchableOpacity>
            <MaterialIcons name="atm" size={50} color="black" style={{ marginHorizontal: 8}}/>
              </TouchableOpacity>
              <TouchableOpacity>
            <MaterialIcons name="qr-code-scanner" size={50} color="black" style={{ marginHorizontal: 8}} />
              </TouchableOpacity>
              <TouchableOpacity>
            <MaterialCommunityIcons name="cash" size={50} color="black" style={{ marginHorizontal: 8}} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor: '#00512C', paddingVertical: 10, alignItems: 'center', borderRadius: 20, marginTop: 20}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>Pembayaran</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* End */}
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation: 4,
    shadowColor: 'black',
    marginHorizontal: 5,
    marginVertical: 15,
    flexDirection: 'row',
  },
  touchable: {
    flexDirection: 'row',
  },
  image: {
    width: 144,
    height: 105,
    borderRadius: 20,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
    marginTop: 5,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 10,
    marginRight: 1,
    activeOpacity: 0.5,
  },
})