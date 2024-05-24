import React from "react";
import { View, ScrollView, Image, TouchableOpacity, Text, TextInput, StyleSheet} from "react-native";
import { Profile, Map, Kopi1 } from "../../image/logo";
import { Lonceng, Search2, Bagan, Dw, Kop, Koppi, Love, Adding, Loving } from "../../image/icon";
import SimpleSelectButton from 'react-native-simple-select-button';

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
              <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Top Menu */}
        <View
          style={styles.topmenu}
        >
          <TouchableOpacity activeOpacity={0.3}>
            <Image source={Profile} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.profile}
          >
            <Image source={Map} />
            <Text style={styles.map}>
              Jakarta, Indonesia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.3}>
            <Image source={Lonceng} />
          </TouchableOpacity>
        </View>
        {/* End Top Menu */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontWeight: "700", fontSize: 13 }}>
            Halooo!! Bersenang Untuk Mengopi.
          </Text>
        </View>
        {/* Search */}
        <View
          style={styles.search}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={Search2} />
            <TextInput style={{ marginLeft: 30 }} />
          </View>
          <TouchableOpacity activeOpacity={0.2}>
            <Image source={Bagan} />
          </TouchableOpacity>
        </View>
        {/* End Search */}

        {/* Category */}
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontWeight: "600" }}>Kategori Menu</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* Menu */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.menuon}
            >
              <Image source={Dw} />
              <Text style={{ color: "white", marginLeft: 7 }}> Coffe Local</Text>
            </TouchableOpacity>
            {/* End Menu */}
            {/* Menu */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.menuof}
            >
              <Image source={Kop} />
              <Text style={{ color: "#00512C", marginLeft: 7 }}> Local Tea </Text>
            </TouchableOpacity>
            {/* End Menu */}
            {/* Menu */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.menuon}
            >
              <Image source={Dw} />
              <Text style={{ color: "white", marginLeft: 7 }}> Coffe Local</Text>
            </TouchableOpacity>
            {/* End Menu */}
            {/* Menu */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.menuof}
            >
              <Image source={Kop} />
              <Text style={{ color: "#00512C", marginLeft: 7 }}> Local Tea </Text>
            </TouchableOpacity>
            {/* End Menu */}
          </ScrollView>
        </View>
        {/* End Category */}

       {/* Lokal Menus */}
<View style={{ marginLeft: 30, marginTop: 20 }}>
  <Text style={{ fontWeight: '600' }}>Menu Favorite</Text>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {/* Menu List */}
     {/* Menu List */}
     <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Kopi1} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Love} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
             {/* Menu List */}
             <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Koppi} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Loving} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
             {/* Menu List */}
             <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Koppi} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Love} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
    {/* End Menu Lokal */}
  </ScrollView>
</View>
{/* End Favorite */}

{/* Menu Favorite */}
<View style={{ marginLeft: 30, marginTop: 20 }}>
  <Text style={{ fontWeight: '600' }}>Menu Favorite</Text>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
     {/* Menu List */}
     <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Koppi} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Love} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
             {/* Menu List */}
             <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Kopi1} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Loving} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
             {/* Menu List */}
             <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Koppi} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Loving} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
    {/* End Menu List */}
  </ScrollView>
</View>
{/* End Favorite */}
{/* Menu Favorite */}

<View style={{ marginLeft: 30, marginTop: 20 }}>
  <Text style={{ fontWeight: '600' }}>Menu Favorite</Text>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {/* Menu List */}
     {/* Menu List */}
     <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Koppi} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Loving} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
             {/* Menu List */}
             <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Koppi} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Love} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
             {/* Menu List */}
             <TouchableOpacity activeOpacity={0.5} style={styles.product} onPress={() => navigation.navigate('Produk')}>
              <Image source={Kopi1} style={{ width: 144, height: 105, borderRadius: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Americano Jawa</Text>
                  <Text style={{ fontSize: 13, marginTop: 5 }}>Less sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 10 }}>
                  <Image source={Loving} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>Rp. 30.000 </Text>
                <Image source={Adding} />
              </View>
            </TouchableOpacity>
            {/* End Menu List */}
    
    {/* End Menu List */}
  </ScrollView>
</View>
{/* End Favorite */}

          </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  topmenu : {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: { flexDirection: "row", alignItems: "center" },
  map: { fontWeight: "400", fontSize: 15, marginLeft: 7 },
 search: {
  flexDirection: "row",
  backgroundColor: "white",
  marginHorizontal: 20,
  paddingHorizontal: 20,
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 10,
  borderRadius: 20,
  marginTop: 20,
},
menuon: {
  backgroundColor: "#00512C",
  paddingVertical: 8,
  marginHorizontal: 5,
  paddingHorizontal: 12,
  flexDirection: "row",
  alignItems: "center",
  borderRadius: 20,
  elevation: 3,
},
menuof: {
  backgroundColor: "#f0ffff",
  paddingVertical: 8,
  marginHorizontal: 5,
  paddingHorizontal: 12,
  flexDirection: "row",
  alignItems: "center",
  borderRadius: 20,
  elevation: 3,
  shadowColor: "black",
},
product: { backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5, elevation: 5, shadowColor: 'black', marginHorizontal: 5, marginVertical: 10 },
});
