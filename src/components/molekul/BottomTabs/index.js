import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Icon = ({ label, focus }) => {
  switch(label) {
    case 'Home':
      return focus ? <Ionicons name="home" size={25} color='#00512C' /> :
      <Ionicons name="home-outline" size={25} color='#00512C' />;
    case 'Favorite': 
      return focus ? <MaterialIcons name="favorite" size={25} color="#00512C" /> :
      <MaterialIcons name="favorite-border" size={25} color="#00512C" />;
    case 'Cart': 
      return focus ? <Ionicons name="cart" size={25} color='#00512C' /> :
      <Ionicons name="cart-outline" size={25} color='#00512C' />;
    case 'Profile':
      return focus ? <Ionicons name="person" size={25} color='#00512C' /> :
      <Ionicons name="people-outline" size={25} color='#00512C' />;
    default:
      return <MaterialIcons name="favorite-border" size={25} color="black" />;
  }
}

const ButtonTabs = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'azure', paddingVertical: 10, paddingHorizontal: 50, justifyContent: 'space-between', paddingTop: 15}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default ButtonTabs

const styles = StyleSheet.create({})
