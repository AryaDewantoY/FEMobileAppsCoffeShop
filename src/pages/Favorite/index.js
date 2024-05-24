import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native"; 
import React from "react";
import { Koppi, Love } from "../../image/icon";

const Favorite = ({navigation}) => {
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      {/* Produk */}
      <View style={{ marginLeft: 20, marginRight:30, marginTop: 20 }}>
        <Text style={{ fontWeight: '600' }}>Favorite</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Product 1 */}
          <View style={styles.menu}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.touchable}
              onPress={() => navigation.navigate('Produk')}
            >
              <Image source={Koppi} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.title}>Americano Jawa</Text>
                <Text style={styles.description}>Less sugar</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>Rp. 30.000</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.icon}
                  >
                    <Image source={Love} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* End Product 1 */}
          {/* Product 2 */}
          <View style={styles.menu}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.touchable}
              onPress={() => navigation.navigate('Produk')}
            >
              <Image source={Koppi} style={styles.image} />
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
              </View>
            </TouchableOpacity>
          </View>
          {/* End Product 2 */}
     {/* Product 2 */}
     <View style={styles.menu}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.touchable}
              onPress={() => navigation.navigate('Produk')}
            >
              <Image source={Koppi} style={styles.image} />
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
              </View>
            </TouchableOpacity>
          </View>
          {/* End Product 2 */}
          {/* Product 2 */}
          <View style={styles.menu}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.touchable}
              onPress={() => navigation.navigate('Produk')}
            >
              <Image source={Koppi} style={styles.image} />
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
              </View>
            </TouchableOpacity>
          </View>
          {/* End Product 2 */}
          {/* Product 2 */}
          <View style={styles.menu}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.touchable}
              onPress={() => navigation.navigate('Produk')}
            >
              <Image source={Koppi} style={styles.image} />
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
              </View>
            </TouchableOpacity>
          </View>
          {/* End Product 2 */}
          {/* Product 2 */}
          <View style={styles.menu}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.touchable}
              onPress={() => navigation.navigate('Produk')}
            >
              <Image source={Koppi} style={styles.image} />
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
              </View>
            </TouchableOpacity>
          </View>
          {/* End Product 2 */}
          
        </ScrollView>
      </View>
    </View>
  );
};

export default Favorite;

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
    activeOpacity: 0.5,
  },
});
